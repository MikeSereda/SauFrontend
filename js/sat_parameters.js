var deviceMap = new Map;

var paramsSet = new Map();
paramsSet.set("eb_no","Eb No");
paramsSet.set("eb_no_remote","Eb No Remote");
paramsSet.set("eb_no_delta","Eb No Delta");
paramsSet.set("eb_no_remote_delta","Eb No Remote Delta");

var loadSatParametersBody = function () {
    var homeMainContainer = document.createElement("div");
    homeMainContainer.id="home_main_container";

    let homeContentContainer1 = document.createElement("div");
    homeContentContainer1.className+="home_content_container ";

    let parametersSelectionBlock = document.createElement("div");
    parametersSelectionBlock.className+="parameters_selection_block ";

    let input1 = document.createElement("input");
    input1.type="datetime-local";
    let date = new Date();
    // date = date.setDate(date.getDate()-7);
    date = date.setHours(date.getHours()-2);
    input1.value=new Date(date).toISOString().split('.')[0];
    input1.id="startTimePicker";

    let input2 = document.createElement("input");
    input2.type="datetime-local";
    input2.value=new Date().toISOString().split('.')[0];
    input2.id="endTimePicker";

    let devicePicker = document.createElement("select");
    devicePicker.name="devicePicker";
    devicePicker.id="devicePicker";

    getJSON(devicesLink,function(err, data) {
        if (err !== null) {
            console.log(err);
        } else {
            for (let i=0;i<data.length;i++){
                let option = document.createElement("option");
                option.value=data[i].id;
                option.innerHTML=data[i].name;
                deviceMap.set(data[i].id,data[i].name);
                devicePicker.appendChild(option);
            }
        }
    });

    let checkboxBlock = document.createElement("div");
    checkboxBlock.id="parameters_checkbox_block";
    let label = document.createElement("label");
    label.innerText="Список доступных параметров";
    let ul = document.createElement("ul");

    for (let key of paramsSet.keys()){
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.innerText=paramsSet.get(key);
        let checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.className="params_checkbox";
        checkbox.value=key;
        li.appendChild(checkbox);
        li.appendChild(p);
        ul.appendChild(li);
    }

    checkboxBlock.appendChild(label);
    checkboxBlock.appendChild(ul);
    let parametersPicker = document.createElement("select");
    parametersPicker.name="devicePicker";
    parametersPicker.id="devicePicker";

    // TODO asking for available params

    // getJSON('',function(err, data) {
    //     if (err !== null) {
    //         console.log(err);
    //     } else {
    //         for (let i=0;i<data.length;i++){
    //             let option = document.createElement("option");
    //             option.value=data[i].id;
    //             option.innerHTML=data[i].name;
    //             deviceMap.set(data[i].id,data[i].name);
    //             console.log(deviceMap.get(data[i].id));
    //             devicePicker.appendChild(option);
    //         }
    //     }
    // });

    let parametersButton = document.createElement("button");
    parametersButton.innerText="Запрос сеансов";
    parametersButton.onclick = function () {
        let checkboxes = document.getElementsByClassName("params_checkbox");
        let requiredParams = new Set;
        for (let item of checkboxes)
            if (item.checked)
                requiredParams.add(item.value);
        askParameters(
            document.getElementById("devicePicker").value,
            document.getElementById("startTimePicker").value,
            document.getElementById("endTimePicker").value,
            requiredParams);
    }

    parametersSelectionBlock.appendChild(input1);
    parametersSelectionBlock.appendChild(input2);
    parametersSelectionBlock.appendChild(devicePicker);
    parametersSelectionBlock.appendChild(checkboxBlock);
    parametersSelectionBlock.appendChild(parametersButton);

    homeContentContainer1.appendChild(parametersSelectionBlock);
    let parametersContainer = document.createElement("div");
    parametersContainer.id="parameters_container";

    homeContentContainer1.appendChild(parametersContainer);
    homeMainContainer.appendChild(homeContentContainer1);
    document.getElementById("body_right_part").appendChild(homeMainContainer);
}

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

// var loadDashboardBody = function (){
//     getJSON(devicesLink,function(err, data) {
//         if (err !== null) {
//             console.log(err);
//         } else {
//             // data = JSON.parse(oldData);
//             modemsData = data;
//             var dashboardContainer = document.createElement("div");
//             dashboardContainer.id="modem_dashboard_container";
//             modems = [];
//             for (let i = 0; i<data.length;i++){
//                 let dashboard = document.createElement("div");
//                 dashboard.className+="modem_dashboard ";
//                 let dashboardCanvas = document.createElement("canvas");
//                 dashboardCanvas.className+="modem_canvas ";
//                 let modemCaption = document.createElement("p");
//                 modemCaption.className+="modem_name ";
//                 dashboardCanvas.id="chart_"+data[i].id;
//                 modemCaption.innerText=data[i].name;
//                 dashboard.appendChild(dashboardCanvas);
//                 dashboard.appendChild(modemCaption);
//                 dashboardContainer.appendChild(dashboard);
//                 deviceParamsMap.set(data[i].id, new deviceParams(data[i].id));
//                 // chartDataInit();
//                 getJSON(parametersLink + '?deviceId=' + data[i].id,function (err2,params){
//                     if (err2 !== null)
//                         console.log(err2);
//                     else
//                         parametersExplain(data[i].id, params);
//                 });
//             }
//             for (let i=0;i<3;i++){
//                 let dashboardGhost = document.createElement("div");
//                 dashboardGhost.className+="modem_dashboard ";
//                 dashboardGhost.className+="ghost ";
//                 dashboardContainer.appendChild(dashboardGhost);
//             }
//             document.getElementById("body_right_part").appendChild(dashboardContainer);
//         }
//     });
// }

function askParameters (deviceId, startTime, endTime, paramsList){
    postJSON(parametersLink + "?deviceId="+deviceId+"&startTime="+startTime+"&endTime="+endTime,JSON.stringify(Array.from(paramsList)),function (err,response) {
        if (err !== null)
            console.log(err);
        else{
            if (response!==null && response!==undefined){
                displayParams(deviceId, response);
            }
        }
    });
}

var displayParams = function (devId, parameterText){
    let parameterMap = new Map(Object.entries(parameterText)).get(devId);
    let valueSet = new Map(Object.entries(parameterMap[0])).get('values');
    let map = new Map(Object.entries(valueSet));
    let params = Array.from(map.keys());
    console.log(params);
    // TODO запихать все параметры в один Чарт
    // for (let i=0; i<parameterMap.length; i++){
    //     let valueSet = new Map(Object.entries(parameterMap[i])).get('values');
    //     // console.log(valueSet);
    //     deviceParamsMap.get(devId)._ebNoArray.push(valueSet.eb_no);
    //     deviceParamsMap.get(devId)._ebNoRemoteArray.push(valueSet.eb_no_remote);
    //     deviceParamsMap.get(devId)._timestampArray.push(valueSet.timestamp_wotz.replace('T', ' '));
    // }
    // chartDraw(deviceParamsMap.get(devId));
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