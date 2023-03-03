var mainLogging = function (){
    if (sessionStorage.getItem('currentToken')===undefined || sessionStorage.getItem('currentToken')===null){
        console.log('token storage is null, go to auth');
        loggingPage(null);

    }
    else{
        document.getElementById("menu_button_home").click();
    }
}

var loggingPage = function (error){
    clearBody("АВТОРИЗАЦИЯ");
    let selected = document.getElementsByClassName("selected");
    Array.from(selected).forEach(function callback(currentValue, index, array) {
        currentValue.classList.remove("selected");
    });

    var loggingMainContainer = document.createElement("div");
    loggingMainContainer.id="content_main_container";

    let loggingContentContainer1 = document.createElement("div");
    loggingContentContainer1.className+="content_content_container ";

    let loggingContentContainer1Header = document.createElement("h3");
    loggingContentContainer1Header.innerText="Введите логин и пароль";

    let loginCaption = document.createElement("p");
    loginCaption.innerText="Логин";

    let loginInputBox = document.createElement("input");
    loginInputBox.className+="login_input_box";
    loginInputBox.id="login_input_box";

    let passwordCaption = document.createElement("p");
    passwordCaption.innerText="Пароль";

    let passwordInputBox = document.createElement("input");
    passwordInputBox.className+="login_input_box";
    passwordInputBox.id="password_input_box";
    passwordInputBox.type="password";

    let loginButton = document.createElement("input");
    loginButton.id="submit_button";
    loginButton.type="button";
    loginButton.value="Авторизоваться"
    loginButton.addEventListener('click',login);

    // homeContentContainer1Text.innerText="";
    loggingContentContainer1.appendChild(loggingContentContainer1Header);
    if (error!=null){
        let errorCaption = document.createElement("h5")
        errorCaption.className+="error_text_block"
        errorCaption.innerText=error;
        loggingContentContainer1.appendChild(errorCaption);
    }
    loggingContentContainer1.appendChild(loginCaption);
    loggingContentContainer1.appendChild(loginInputBox);
    loggingContentContainer1.appendChild(passwordCaption);
    loggingContentContainer1.appendChild(passwordInputBox);
    loggingContentContainer1.appendChild(loginButton);
    loggingMainContainer.appendChild(loggingContentContainer1);
    document.getElementById("body_right_part").appendChild(loggingMainContainer);
    //await auth('admin','admin');
    //console.log('logging is end.');
}

var logout = function (){
    console.log('flushing token and roles.');
    sessionStorage.removeItem('currentToken');
    sessionStorage.removeItem('roleArray');
    let i=9999;
    sessionStorage.setItem('maxRoleLevel',i.toString());
    let roleField = document.getElementById("username");
    let actionFiled = document.getElementById("logout");
    roleField.innerText = "Наблюдатель"
    actionFiled.innerText = "(Неавторизован)"
    document.getElementById("administration_block").style.display="none";
    mainLogging();
}

var login = async function (){
    let loginInputText = document.getElementById("login_input_box").value;
    let passwordInputText = document.getElementById("password_input_box").value;
    let authResult = await auth(loginInputText,passwordInputText);
    if (authResult>=200 && authResult<300){
        checkRoles(sessionStorage.getItem('roleArray'));
        let roleLevel = parseInt(sessionStorage.getItem('maxRoleLevel'));
        console.log(sessionStorage.getItem('maxRoleLevel'));
        let usernameBlock = document.getElementById("username");
        if (roleLevel>=2000&& roleLevel<3000){
            usernameBlock.innerText="Администратор";
        }
        if (roleLevel>=1000&& roleLevel<2000){
            usernameBlock.innerText="Оператор";
        }
        if (roleLevel<1000){
            usernameBlock.innerText="Наблюдатель";
        }
        usernameBlock.display="block";
        document.getElementById("menu_button_home").click();
    }
    else{
        loggingPage("Ошибка авторизации.");
    }
}

var auth = async function (login,pass){
    const url = address+':'+port+apiVer+'auth/login';
    let authData = new Map;
    authData.set('username',login);
    authData.set('password',pass);
    try {
        console.log('sending auth data');
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(authData)),//
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        let roleArray = json.roles.split(':');
        roleArray = roleArray.slice(0,roleArray.length-1);
        sessionStorage.setItem('currentToken',json.token);
        sessionStorage.setItem("roleArray",roleArray);
        return response.status;
    } catch (error) {
        console.error('Ошибка:', error);
        return error;
    }
}

var checkRoles = function (roleArray){
    for (let i=0;i<roleArray.split(',').length;i++){
        let currentRoleLevel;
        let roleLevel;
        switch (roleArray.split(',')[i]) {
            case "ADMIN_SAT": {
                roleLevel = 2000;
                currentRoleLevel = parseInt(sessionStorage.getItem('maxRoleLevel'));
                sessionStorage.setItem('maxRoleLevel',Math.max(currentRoleLevel,roleLevel));
            }
            case "OPERATOR_SAT": {
                roleLevel = 1000;
                currentRoleLevel = parseInt(sessionStorage.getItem('maxRoleLevel'));
                sessionStorage.setItem('maxRoleLevel',Math.max(currentRoleLevel,roleLevel));
            }
            default:{
                roleLevel = 0;
                currentRoleLevel = parseInt(sessionStorage.getItem('maxRoleLevel'));
                sessionStorage.setItem('maxRoleLevel',Math.max(currentRoleLevel,roleLevel));
            }
        }
    }
}