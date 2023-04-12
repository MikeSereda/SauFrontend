function loadHomeBody(){
    var homeMainContainer = document.createElement("div");
    homeMainContainer.id="home_main_container";

    let homeContentContainer1 = document.createElement("div");
    homeContentContainer1.className+="home_content_container ";

    let homeContentContainer1Header = document.createElement("h3");
    homeContentContainer1Header.innerText="";

    let homeContentContainer1Text = document.createElement("p");
    homeContentContainer1Text.className+="phonebook_ul"
    getJSON(greetLink,function(err, data) {
        if (err !== null) {
            console.log(err);
            if (err===401){
                loggingPage();
            }
            else{
                if (err===403){
                    alert("Недостаточно прав.");
                }
                else {
                    alert("Неизвестная ошибка");
                }
                loadHomeBody();
            }
        }
        else {
            // console.log(data);
            homeContentContainer1Header.innerText=data.headerText;
            homeContentContainer1Text.innerText = data.bodyText;
            homeContentContainer1.appendChild(homeContentContainer1Header);
            homeContentContainer1.appendChild(homeContentContainer1Text);
            homeMainContainer.appendChild(homeContentContainer1);
            document.getElementById("body_right_part").appendChild(homeMainContainer);
        }
    });
}