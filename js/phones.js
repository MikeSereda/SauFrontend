function loadPhoneBody(){
    var homeMainContainer = document.createElement("div");
    homeMainContainer.id="home_main_container";

    let homeContentContainer1 = document.createElement("div");
    homeContentContainer1.className+="home_content_container ";

    let homeContentContainer1Header = document.createElement("h3");
    homeContentContainer1Header.innerText="Временная страница телефонных номеров";

    let homeContentContainer1Text = document.createElement("ul");
    homeContentContainer1Text.className+="phonebook_ul"
    getJSON(address+':'+port+apiVer+'phones',function(err, data) {
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
            for (let i=0;i<data.length;i++){
                let li = document.createElement("li");
                li.innerText = data[i].city+' - '+data[i].cityCode;
                let innerUl = document.createElement("ul");
                for (let j=0;j<Object.keys(data[i].subscribers).length;j++){
                    let key = Object.keys(data[i].subscribers)[j];
                    let value = data[i].subscribers[key]
                    let li1 = document.createElement("li");
                    li1.innerText = key+ ' - ' +value;
                    innerUl.appendChild(li1);
                }
                li.appendChild(innerUl);
                homeContentContainer1Text.appendChild(li);
            }
            homeContentContainer1.appendChild(homeContentContainer1Header);
            homeContentContainer1.appendChild(homeContentContainer1Text);
            homeMainContainer.appendChild(homeContentContainer1);
            document.getElementById("body_right_part").appendChild(homeMainContainer);
        }
    });
    // homeContentContainer1Text.innerText="";

}