function roles_setup() {
    let roleField = document.getElementById("username");
    let actionFiled = document.getElementById("logout");
    let actionText="(Неавторизован)";
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
        console.log(authorized);
        if (authorized){
            document.getElementById("logout").innerText="Выход"
        }
        usernameBlock.display="block";
    }
}

function admin_settings() {
    document.getElementById("logout").setAttribute("onclick","logout()");
    document.getElementById("administration_block").style.display="block";
}

function operator_settings() {
    document.getElementById("logout").setAttribute("onclick","logout()");
}

function observer_settings() {

}