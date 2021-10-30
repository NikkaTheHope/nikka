const nav = document.createElement("div");
nikkaFunc.makeClasses(["flex__container","row","card__normal"],nav);
nikkaFunc.makeHeaderCard("HEADER",nav);

menus.forEach( menu => {
    nikkaFunc.makeDivContent(menu,nav,false);
});

body.append(nav);