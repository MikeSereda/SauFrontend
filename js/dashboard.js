var modemList;
var modemsData;
var dashboardCanvases;
var modemRefreshingLoopFunctionId;
var limit = 600;
var chartData;
var ebNo;
var ebNoRemote;
var timestamp;
var loadedDataCount;
var charts;
var lastRefreshedData;
var chartOptions = {
    responsive: true,
    animation: {
        duration: 0
    },
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
                display: false,
                align: 'end',
                text: 'dB',
                padding: {
                    y: 100
                }
            },
            min: 0,
            max: 9
        },
        x: {
            display: false
        }
    }
};

var loadDashboardBody = function (){
    modemList = new Array();
    dashboardCanvases = new Array();
    chartData = new Array();
    ebNo = new Array();
    ebNoRemote = new Array();
    timestamp = new Array();
    loadedDataCount = 0;
    charts = new Array();
    getJSON(address+':'+port+apiVer+'devices',null,function(err, data) {
        if (err !== null) {
            console.log(err);
        } else {
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
            }
            for (let i=0;i<3;i++){
                let dashboardGhost = document.createElement("div");
                dashboardGhost.className+="modem_dashboard ";
                dashboardGhost.className+="ghost ";
                dashboardContainer.appendChild(dashboardGhost);
            }
            document.getElementById("body_right_part").appendChild(dashboardContainer);
            dashboardsRefreshingFunction(data);
        }
    });
}

var dashboardsRefreshingFunction = function (
    // baseLoadData
){
    let hour = 1000*60*60;
    let twoHoursAgo = Date.now()+hour;
    var date = new Date(twoHoursAgo);
    var dateTwoHoursAgo = date.toISOString().split('.')[0];
    console.log(dateTwoHoursAgo);
    var keys;

    getJSON(address + ':' + port + apiVer + 'updates',
        null,
        function (err, deviceParamMap) {
            if (err !== null) {
                console.log(err);
            } else {
                keys = Object.keys(deviceParamMap);
                for (let device in deviceParamMap) {
                    modemList.push(device);
                    dashboardCanvases.push(document.getElementById("chart_"+device).getContext("2d"));
                    let ebNoCommon = new Array();
                    let ebNoRemoteCommon = new Array();
                    let timestampCommon = new Array();
                    for (let i=0; i<deviceParamMap[device].length;i++){
                        ebNoCommon.push(deviceParamMap[device][i].ebNo);
                        ebNoRemoteCommon.push(deviceParamMap[device][i].ebNoRemote);
                        timestampCommon.push(deviceParamMap[device][i].timestampWotz);
                    }
                    ebNo.push(ebNoCommon);
                    ebNoRemote.push(ebNoRemoteCommon);
                    timestamp.push(timestampCommon);
                }
                chartDataInit();
            }
        });
}

var chartDataInit = async function (){
    for (let i=0;i<ebNo.length;i++){
        var chartDataCommon = {
            setname : "",
            labels: timestamp[i],
            datasets: [
                {
                    label: "Eb/No"+i,
                    borderColor: 'blue',
                    fill: false,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    borderWidth: 1.5,
                    tension: 0.5,
                    pointHitRadius: 10,
                    pointRadius: 0.5,
                    showLine: true,
                    spanGaps: true,
                    data: ebNo[i]
                },
                {
                    label: "Eb/No Remote",
                    borderColor: 'red',
                    fill: true,
                    pointHitRadius: 10,
                    borderWidth: 1,
                    spanGaps: false,
                    tension: 0.5,
                    pointRadius: 1,
                    data: ebNoRemote[i]
                }
            ]
        };
        chartData.push(chartDataCommon);
    }
    chartsInit();
}

var chartsInit = function (){
    for (let i=0;i<dashboardCanvases.length;i++){
        charts.push(
            new Chart(dashboardCanvases[i], {
                type: 'line',
                data: chartData[i],
                options: chartOptions
            })
        );
    }
    modemRefreshingLoopFunctionId = setInterval(chartRefreshing,chartRefreshRate);
}



var chartRefreshing = async function (){
    const url = address+':'+port+apiVer+'updates?reduced=true&limit='+newLimit;
    lastRefreshedData = new Map;
    for (let i=0;i<modemList.length;i++){
        lastRefreshedData.set(modemList[i],timestamp[i][timestamp[i].length-2].replace(' ','T'));
    }
    // console.log(JSON.stringify(Object.fromEntries(lastRefreshedData)));
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(lastRefreshedData)),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        let keys = Object.keys(json);
        // console.log(json);
        for (let object in json) {
            // console.log(object);
            let index = modemList.indexOf(object);
            // console.log(json[object].length);
            if (json[object].length>0){
                ebNo[index].shift();
                ebNoRemote[index].shift();
                timestamp[index].shift();
                ebNo[index].push(object.ebNo);
                ebNoRemote[index].push(object.ebNoRemote);
                timestamp[index].push(object.timestampWotz);
            }
        }
        for (let i=0;i<charts.length;i++){
            charts[i].data.labels = timestamp[i];
            charts[i].data.datasets[0].data = ebNo[i];
            charts[i].data.datasets[1].data = ebNoRemote[i];
            charts[i].update();
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}