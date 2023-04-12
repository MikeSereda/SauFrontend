var modemList;
var modemsData;
var modemRefreshingLoopFunctionId;
var limit = 600;
var timestamp;
var charts;
var timers = new Array();

class deviceParams {
    _ebNoArray = new Array();
    _ebNoRemoteArray = new Array();
    _timestampArray = new Array();
    _deviceId;

    _chart;
    constructor(deviceId) {
        this._deviceId = deviceId;
    }

    get deviceId() {
        return this._deviceId;
    }

    set ebNoArray(array){
        this._ebNoArray = array;
    }

    set ebNoRemoteArray(value) {
        this._ebNoRemoteArray = value;
    }

    set timestampArray(value) {
        this._timestampArray = value;
    }


    get ebNoArray() {
        return this._ebNoArray;
    }

    get ebNoRemoteArray() {
        return this._ebNoRemoteArray;
    }

    get timestampArray() {
        return this._timestampArray;
    }


    get chart() {
        return this._chart;
    }

    set chart(value) {
        this._chart = value;
    }
}

var deviceParamsMap = new Map();

var chartOptions = {
    spanGaps: true,
    responsive: true,
    animation: false,
    legend: {
        display: true,
        backgroundColor: (255,255,255),
        position: 'top',
        labels: {
            boxWidth: 40,
            fontColor: 'white'
        }
    },
    scales:{
        y: {
            title: {
                display: true,
                align: 'end',
                text: 'dB',
                padding: {
                    y: 0
                }
            },
            min: -2,
            max: 16
        },
        x: {
            display: false
        }
    }
};

var loadDashboardBody = function (){
    getJSON(devicesLink,function(err, data) {
        if (err !== null) {
            console.log(err);
        } else {
            // data = JSON.parse(oldData);
            modemsData = data;
            var dashboardContainer = document.createElement("div");
            dashboardContainer.id="modem_dashboard_container";
            modems = [];
            for (let i = 0; i<data.length;i++){
                let dashboard = document.createElement("div");
                dashboard.className+="modem_dashboard ";
                let dashboardCanvas = document.createElement("canvas");
                dashboardCanvas.className+="modem_canvas ";
                let modemCaption = document.createElement("p");
                modemCaption.className+="modem_name ";
                dashboardCanvas.id="chart_"+data[i].id;
                modemCaption.innerText=data[i].name;
                dashboard.appendChild(dashboardCanvas);
                dashboard.appendChild(modemCaption);
                dashboardContainer.appendChild(dashboard);
                deviceParamsMap.set(data[i].id, new deviceParams(data[i].id));
                // chartDataInit();
                getJSON(parametersLink + '?deviceId=' + data[i].id,function (err2,params){
                    if (err2 !== null)
                        console.log(err2);
                    else
                        parametersExplain(data[i].id, params);
                });
            }
            for (let i=0;i<3;i++){
                let dashboardGhost = document.createElement("div");
                dashboardGhost.className+="modem_dashboard ";
                dashboardGhost.className+="ghost ";
                dashboardContainer.appendChild(dashboardGhost);
            }
            document.getElementById("body_right_part").appendChild(dashboardContainer);
        }
    });
}

var parametersExplain = function (devId, parameterText){
    let parameterMap = new Map(Object.entries(parameterText)).get(devId);
    for (let i=0; i<parameterMap.length; i++){
        let valueSet = new Map(Object.entries(parameterMap[i])).get('values');
        // console.log(valueSet);
        deviceParamsMap.get(devId)._ebNoArray.push(valueSet.eb_no);
        deviceParamsMap.get(devId)._ebNoRemoteArray.push(valueSet.eb_no_remote);
        deviceParamsMap.get(devId)._timestampArray.push(valueSet.timestamp_wotz.replace('T', ' '));
    }
    chartDraw(deviceParamsMap.get(devId));
}

var chartDraw = function (deviceParamsSet) {
    let canvasId = 'chart_'+deviceParamsSet._deviceId;
    let chartDataCommon = {
        setname : "",
        labels: deviceParamsSet._timestampArray,
        datasets: [
            {
                order: 1,
                label: "Eb/No",
                fill: true,
                backgroundColor: "rgba(255,99,132,0.3)",
                hoverBackgroundColor: "rgba(255,99,132,1)",
                borderColor: "rgba(255,99,132,0.8)",
                hoverBorderColor: "rgba(255,99,132,1)",
                borderWidth: 0,
                tension: 1,
                pointHitRadius: 10,
                pointRadius: 0,
                showLine: true,
                spanGaps: true,
                data: deviceParamsSet._ebNoArray
            },
            {
                order: 2,
                z: 2,
                label: "Eb/No Remote",
                backgroundColor: "rgba(0,72,255,0.3)",
                hoverBackgroundColor: "rgba(0,72,255,1)",
                borderColor: "rgba(0,72,255,0.8)",
                hoverBorderColor: "rgba(0,72,255,1)",
                fill: true,
                pointHitRadius: 10,
                borderWidth: 0,
                spanGaps: true,
                tension: 1,
                pointRadius: 0,
                data: deviceParamsSet._ebNoRemoteArray
            }
        ]
    }
    deviceParamsSet._chart = new Chart(canvasId, {
        type: 'line',
        data: chartDataCommon,
        options: chartOptions
    });
    timers.push(setInterval(() => updatingParams(deviceParamsSet), 1000));
}

var updatingParams = function (deviceParamsSet) {
    let responseBody = new Map();
    let lastUpTime = deviceParamsSet._timestampArray[deviceParamsSet._timestampArray.length-1];
    responseBody.set(deviceParamsSet._deviceId,lastUpTime.replace(' ', 'T'));
    let responseBodyJson = JSON.stringify(Object.fromEntries(responseBody));
    postJSON(updatesLink,responseBodyJson,function (err,response) {
        if (err !== null)
            console.log(err);
        else{
            if (response!==null && response!==undefined){
                chartRefresh(deviceParamsSet, response);
            }
        }
    });
}

var chartRefresh = function (deviceParamsSet, response) {
    let devId = deviceParamsSet._deviceId;
    let parameterMap = new Map(Object.entries(response)).get(devId);
    for (let i=0; i<parameterMap.length; i++){
        let valueSet = new Map(Object.entries(parameterMap[i])).get('values');
        if (!(deviceParamsMap.get(devId)._timestampArray[deviceParamsSet._timestampArray.length-1]===valueSet.timestamp_wotz.replace('T', ' '))){
            deviceParamsMap.get(devId)._ebNoArray.push(valueSet.eb_no);
            deviceParamsMap.get(devId)._ebNoRemoteArray.push(valueSet.eb_no_remote);
            deviceParamsMap.get(devId)._timestampArray.push(valueSet.timestamp_wotz.replace('T', ' '));

            deviceParamsMap.get(devId)._ebNoArray.shift();
            deviceParamsMap.get(devId)._ebNoRemoteArray.shift();
            deviceParamsMap.get(devId)._timestampArray.shift();
        }
    }
    deviceParamsMap.get(devId)._chart.update();
}

var cancelUpdating = function (){
    for (let i=0;i<timers.length;i++){
        clearInterval(timers[i]);
    }
}