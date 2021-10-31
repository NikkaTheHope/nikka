const drawNav = {

    indexNav : function(){
        const nav = document.createElement("div");
        nikkaFunc.makeClasses(["flex__container","row","scroll-box-x","card-normal"],nav);
        body.append(nav);
    }

};

drawNav.indexNav();