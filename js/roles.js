function roles_setup() {
    let roleField = document.getElementById("username");
    let actionFiled = document.getElementById("logout");
    let roleText="Наблюдатель";
    let actionText="(Неавторизован)";
    let roleLevel=sessionStorage.getItem('maxRoleLevel');
    if (roleLevel<1000 && roleLevel>0){
        admin_settings();
        roleText="Администратор";
        actionText="Выйти из аккаунта";

    }
    else{
        if (roleLevel<2000 && roleLevel>=1000){
            operator_settings();
            roleText="Оператор";
            actionText="Выйти из аккаунта";
        }
        else{
            if (roleLevel>=2000){
                observer_settings();
                roleText="Наблюдатель";
                actionText="(Неавторизован)";
            }
        }
    }
    roleField.innerText=roleText;
    actionFiled.innerText=actionText;
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