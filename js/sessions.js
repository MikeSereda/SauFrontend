var deviceMap = new Map;
var loadSessionsBody = function (){var homeMainContainer = document.createElement("div");
    homeMainContainer.id="home_main_container";

    let homeContentContainer1 = document.createElement("div");
    homeContentContainer1.className+="home_content_container ";

    let sessionsSelectionBlock = document.createElement("div");
    sessionsSelectionBlock.className+="sessions_selection_block ";

    let input1 = document.createElement("input");
    input1.type="datetime-local";
    let date = new Date();
    date = date.setDate(date.getDate()-7);
    input1.value=new Date(date).toISOString().split('.')[0];
    input1.id="startTimePicker";

    let input2 = document.createElement("input");
    input2.type="datetime-local";
    input2.value=new Date().toISOString().split('.')[0];
    input2.id="endTimePicker";

    let devicePicker = document.createElement("select");
    devicePicker.name="devicePicker";
    devicePicker.id="devicePicker";

    let allDevsOption = document.createElement("option");
    allDevsOption.value="";
    allDevsOption.innerHTML="Все сеансы за период";
    devicePicker.appendChild(allDevsOption);

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

    let sessionsButton = document.createElement("button");
    sessionsButton.innerText="Запрос сеансов";
    sessionsButton.onclick = function () {
        baseSessions(
            document.getElementById("devicePicker").value,
            document.getElementById("startTimePicker").value,
            document.getElementById("endTimePicker").value)
    }

    sessionsSelectionBlock.appendChild(input1);
    sessionsSelectionBlock.appendChild(input2);
    sessionsSelectionBlock.appendChild(devicePicker);
    sessionsSelectionBlock.appendChild(sessionsButton);

    homeContentContainer1.appendChild(sessionsSelectionBlock);
    let sessionsContainer = document.createElement("div");
    sessionsContainer.id="sessions_container";

    homeContentContainer1.appendChild(sessionsContainer);
    homeMainContainer.appendChild(homeContentContainer1);
    document.getElementById("body_right_part").appendChild(homeMainContainer);
    baseSessions('','','');
}

var baseSessions = function (deviceId, startTime, endTime) {
    let sessionsContainer = document.getElementById("sessions_container");
    sessionsContainer.innerHTML='';
    console.log("startTime "+startTime);
    console.log("endTime "+endTime);
    console.log(sessionsLink+"?deviceId="+deviceId+"&startTime="+startTime+"&endTime="+endTime);
    getJSON(sessionsLink+"?deviceId="+deviceId+"&startTime="+startTime+"&endTime="+endTime,function(err, data) {
        if (err !== null) {
            console.log(err);
        } else {

            console.log(data);
            for (let i=0; i<data.length;i++){
                let session = document.createElement("div");
                session.className+="session ";
                if (data[i].deviceId==="cdm111"){
                    if (data[i].carrierState===1)
                        session.className+="planned "
                    else
                        session.className+="between_centre "
                }
                else{
                    if (data[i].deviceId==="cdm118")
                        session.className+="asdp "
                    else
                        session.className+="unplanned "
                }

                let startTimeBlock = document.createElement("div");
                startTimeBlock.innerText=data[i].startTime.replace('T', ' ').split('.')[0];
                startTimeBlock.className="session_time";

                let endTimeBlock = document.createElement("div");
                endTimeBlock.innerText=data[i].endTime.replace('T', ' ').split('.')[0];
                endTimeBlock.className="session_time";

                let durationBlock = document.createElement("div");
                durationBlock.innerText=data[i].duration;
                durationBlock.className="session_duration";

                let deviceBlock = document.createElement("div");
                deviceBlock.innerText = deviceMap.get(data[i].deviceId);
                deviceBlock.className="session_device";

                session.appendChild(startTimeBlock);
                session.appendChild(endTimeBlock);
                session.appendChild(durationBlock);
                session.appendChild(deviceBlock);

                sessionsContainer.appendChild(session);
            }
        }
    });
}