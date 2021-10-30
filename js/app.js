const nav = document.createElement("div");
nikkaFunc.makeClasses(["flex__container","row","card__normal"],nav);
nikkaFunc.makeHeaderCard("HEADER",nav);

menus.forEach( menu=> {
    const div = document.createElement("div");
    div.innerText = menu;
    nav.append(div);
});

body.append(nav);