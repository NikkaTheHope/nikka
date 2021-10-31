const nav = document.createElement("div");
nikkaFunc.makeClasses(["flex__container","row","card__normal"],nav);
nikkaFunc.makeHeaderCard("HEADER",nav);
nav.firstChild.addEventListener("click",function(){
    nikkaFunc.makeBtnShow(nav.children,nav.firstChild,"")
});

menus.forEach( menu => {
    nikkaFunc.makeDivContent(menu,nav,false);
});

body.append(nav);