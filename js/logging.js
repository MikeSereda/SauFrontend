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
}

var logout = function (){
    if (sessionStorage.getItem('roles')){
        console.log('flushing token and roles.');
        sessionStorage.clear();
        let roleField = document.getElementById("username");
        let actionFiled = document.getElementById("logout");
        roleField.innerText = null;
        actionFiled.innerText = "(Неавторизован)"
        document.getElementById("administration_block").style.display="none";
        mainLogging();
    }
}

var login = async function (){
    let loginInputText = document.getElementById("login_input_box").value;
    let passwordInputText = document.getElementById("password_input_box").value;
    let authResult = await auth(loginInputText,passwordInputText);
    if (authResult>=200 && authResult<300){
        roles_setup();
        document.getElementById("menu_button_home").click();
    }
    else{
        loggingPage("Ошибка авторизации.");
    }
}

var auth = async function (login_name,password){
    const url = "http://localhost:7005/sauauth/api/v1/auth/authenticate"
    let authData = new Map;
    authData.set('login',login_name);
    authData.set('password',password);
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(authData)),//
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        sessionStorage.setItem('currentToken',json.token);
        sessionStorage.setItem('possibilities',JSON.stringify(json.permission.possibilities));
        sessionStorage.setItem('menus',JSON.stringify(json.permission.menus));
        sessionStorage.setItem('roles',JSON.stringify(json.roles));
        return response.status;
    } catch (error) {
        console.error('Ошибка:', error);
        return error;
    }
}

function roles_setup() {
    if (sessionStorage.getItem('roles')){
        roles = JSON.parse(sessionStorage.getItem('roles'));
        let usernameBlock = document.getElementById("username");
        document.getElementById("logout").innerText="(Неавторизован)"
        let authorized = false;
        if (roles.includes('OBSERVER')){
            usernameBlock.innerText="Наблюдатель";
            authorized = true;
        }
        if (roles.includes('OPERATOR')){
            usernameBlock.innerText="Оператор";
            authorized = true;
        }
        if (roles.includes('ADMIN')){
            usernameBlock.innerText="Администратор";
            authorized = true;
        }
        if (authorized){
            document.getElementById("logout").innerText="Выход"
        }
        usernameBlock.display="block";
    }
}