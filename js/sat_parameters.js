var deviceMap = new Map;

var paramsSet = new Map();
paramsSet.set("eb_no","Eb No");
paramsSet.set("eb_no_remote","Eb No Remote");
paramsSet.set("eb_no_delta","Eb No Delta");
paramsSet.set("eb_no_remote_delta","Eb No Remote Delta");
paramsSet.set("temperature","Temperature");
paramsSet.set("ber","BER");
paramsSet.set("power_level","Power Level");
paramsSet.set("power_level_increase","Power Level Increase");
paramsSet.set("rsl","RSL");
paramsSet.set("freq_offset","Frequency Offset");
paramsSet.set("delay","Delay");


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

    let parametersPicker = document.createElement("select");
    parametersPicker.name="paramsPicker";
    parametersPicker.id="paramsPicker";
    parametersPicker.multiple = "paramsPicker";
    parametersPicker.size=paramsSet.size;

    for (let key of paramsSet.keys()){
        let option = document.createElement("option");
        option.value=key;
        option.innerHTML=paramsSet.get(key);
        option.className="params_option";
        parametersPicker.appendChild(option);
    }

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
    parametersButton.innerText="Запрос параметров";
    parametersButton.onclick = function () {
        let checkboxes = document.getElementsByClassName("params_option");
        let requiredParams = new Set;
        for (let item of checkboxes)
            if (item.selected)
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
    parametersSelectionBlock.appendChild(parametersButton);
    parametersSelectionBlock.appendChild(parametersPicker);

    homeContentContainer1.appendChild(parametersSelectionBlock);
    let parametersContainer = document.createElement("div");
    parametersContainer.id="parameters_container";

    homeContentContainer1.appendChild(parametersContainer);
    homeMainContainer.appendChild(homeContentContainer1);
    document.getElementById("body_right_part").appendChild(homeMainContainer);
}

function askParameters (deviceId, startTime, endTime, paramsList){
    postJSON(parametersLink + "?deviceId="+deviceId+"&startTime="+startTime+"&endTime="+endTime,JSON.stringify(Array.from(paramsList)),function (err,response) {
        if (err !== null)
            console.log(err);
        else{
            if (response!==null && response!==undefined){
                if (document.getElementById("parameters_dashboard")!==null){
                    document.getElementById("parameters_dashboard").remove();
                }
                displayParams(deviceId, response);
            }
        }
    });
}

var displayParams = function (devId, parameterText){
    let parameterMap = new Map(Object.entries(parameterText)).get(devId);
    let valueSet0 = new Map(Object.entries(parameterMap[0])).get('values');
    let map0 = new Map(Object.entries(valueSet0));
    let params = Array.from(map0.keys());
    let paramMap = new Map();
    let datasets = [];

    for (let param of params){
        paramMap.set(param,[]);
    }

    for (let i=0; i<parameterMap.length;i++){
        let valuesSet = new Map(Object.entries(parameterMap[i])).get('values');
        let map = new Map(Object.entries(valuesSet));
        for (let param of params){
            let value = map.get(param);
            if (param==='timestamp_wotz')
                value.replace('T', ' ');
            paramMap.get(param).push(value);
        }
    }

    for (let param of params){
        let r = Math.random()*255;
        let g = Math.random()*255;
        let b = Math.random()*255;
        if (param!=='timestamp_wotz'){
            datasets.push({
                label: param,
                fill: true,
                backgroundColor: "rgba("+r+","+g+","+b+",1)",
                hoverBackgroundColor: "rgba("+r+","+g+","+b+",1)",
                borderColor: "rgba("+r+","+g+","+b+",1)",
                hoverBorderColor: "rgba("+r+","+g+","+b+",1)",
                borderWidth: 0,
                tension: 1,
                pointHitRadius: 10,
                pointRadius: 0,
                showLine: true,
                spanGaps: true,
                data: paramMap.get(param)
            });
        }
    }

    let chartDataCommon = {
        setname : "",
        labels: paramMap.get("timestamp_wotz"),
        datasets: datasets
    }

    let dashboard = document.createElement("div");
    dashboard.className+="params_dashboard ";
    dashboard.id="parameters_dashboard";
    let dashboardCanvas = document.createElement("canvas");
    dashboardCanvas.className+="params_canvas ";
    dashboardCanvas.id="chart_parameters";
    dashboard.appendChild(dashboardCanvas);
    document.getElementById("parameters_container").appendChild(dashboard);

    let chartOptions = {
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
                }
            },
            x: {
                display: false
            }
        }
    };

    let chart = new Chart(dashboardCanvas.getContext('2d'), {
        type: 'line',
        data: chartDataCommon,
        options: chartOptions
    });
}
