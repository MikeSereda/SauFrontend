var address = "http://localhost";
var apiVer = "/api/v1/"
var port = "8080";
var chartRefreshRate = 1000;
var scopeTime = "00:02:00";
var hours = scopeTime.split(':')[0];
var minutes = scopeTime.split(':')[1];
var seconds = scopeTime.split(':')[2];
var newLimit = ((hours*3600) + (minutes*60) + (seconds/1))/(chartRefreshRate/1000);

var getJSON = function(url, callback) {
    let token = sessionStorage.getItem('currentToken');
    console.log(token);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    if (token!=null){
        xhr.setRequestHeader('Authorization','Bearer ' + token);
    }
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            alert("Ошибка соединения");
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

var getTextRequest = function(url, token, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', url, true);
    if (token!=null){
        xhr.setRequestHeader('Authorization','Bearer ' + token);
    }
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.responseText);
        } else {
            callback(status, xhr.responseText);
        }
    };
    xhr.send();
}

var clearBody = function (caption) {
    clearInterval(modemRefreshingLoopFunctionId);
    document.getElementById("body_header_text").innerText=caption.toUpperCase();
    if (document.getElementById("body_right_part").lastChild.id!="body_header"){
        document.getElementById("body_right_part").lastChild.remove();
    }
}
function addDelegation(){
    roles_setup();
    document.getElementById("menu_container").addEventListener('click',event => {
        if (event.target.className.includes("secondary_menu_block")){
            if (!event.target.className.includes("selected")){
                let selected = document.getElementsByClassName("selected");
                Array.from(selected).forEach(function callback(currentValue, index, array) {
                    currentValue.classList.remove("selected");
                });
                event.target.classList.add("selected");
            }
            let id = event.target.id
            switch (id.substring(12)) {
                case "home" :
                    home();
                    break;
                case "phones" :
                    phones();
                    break;
                case "dashboard" :
                    dashboard();
                    break;
                case "satParameters" :
                    satParameters();
                    break;
                case "sessionsList" :
                    sessionsList();
                    break;
                case "administration" :
                    administration();
                    break;
                case "userConfiguration" :
                    userConfiguration();
                    break;
                case "registerNewUser" :
                    registerNewUser();
                    break;
                case "settings" :
                    settings();
                    break;
                case "actionsLog" :
                    actionsLog();
                    break;
                default :
                    dummy();
            }
        }
    });
    mainLogging();
}

var home = function (){
    clearBody("ГЛАВНАЯ СТРАНИЦА");
    loadHomeBody(); //home.js
    console.log("home link executing");
}

var phones = function (){
    clearBody("ТЕЛЕФОНЫ");
    loadPhoneBody(); //phones.js
}

var dashboard = function (){
    clearBody("ГРАФИКИ");
    loadDashboardBody(); //dashboard.js
    console.log("dashboards link executing");
}

var satParameters = function (){
    clearBody("Параметры наведения");
    console.log("satParameters link executing");
}
var sessionsList = function (){
    clearBody("Спутниковые сеансы");
    console.log("sessionsList link executing");
}
// var administration = function (){
//     clearBody("администрирование");
//     administrationLoadBody(); //administration.js
// }
var userConfiguration = function (){
    clearBody("Управление");
    console.log("userConfiguration link executing");
}
var registerNewUser = function (){
    clearBody("регистрация пользователей");
    console.log("registerNewUser link executing");
}
var settings = function (){
    clearBody("настройки");
    console.log("settings link executing");
}
var actionsLog = function (){
    clearBody("история действий");
    console.log("actionsLog link executing");
}
var dummy = function (){
    clearBody("ФУНКЦИЯ-ЗАГЛУШКА");
    console.log("Заглушка");
}

