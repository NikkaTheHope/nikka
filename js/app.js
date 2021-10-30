const nav = document.createElement("div");
nikkaFunc.makeClasses(["flex__container","row"],nav);

menus.forEach( menu=> {
    const div = document.createElement("div");
    nav.append(div);
});

body.append(div);