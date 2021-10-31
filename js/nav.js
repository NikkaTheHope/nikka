
const nav = document.createElement("div");
const header = document.createElement("header");


nikkaFunc.makeClasses(["flex__container","card__normal","row"],nav);
header.innerText = "HEADER";

nav.append(header);
body.append(nav);

const archive = {
    indexNav : {
        study : {
            id : 'studyNav',
            name : "Study"
        },
        menu_02 : {
            id : 'studyNav',
            name : "menu 02"
        },
        menu_03 : {
            id : 'studyNav',
            name : "menu 03"
        }
    },
    studyNav : {
        javascript : {
            id : '001_001',
            name : 'Javascript | 자바스크립트',
            content_url : ""
        },
        linux : {
            id : '001_002',
            name : 'Linux | 리눅스',
            content_url : ""
        }
    }
};

const initNavs = {
    home : function(){

    },
    draw : function(obj){
        Object.keys(archive[obj]).forEach( key => {
            const div = document.createElement("div");
            div.innerText = archive[obj][key].name;
            div.menu = obj;
            div.id = archive[obj][key].id;
            nikkaFunc.makeClasses(["btn",obj],div);
            nav.append(div);
            div.addEventListener("click",archiveClicked);
        });
    },
    show : function(){

    },
    navMain : function(bool){
        if(!bool){
            initNavs.draw("indexNav");
        }else{

        }
    },
    studyNav : function(bool){
        if(!bool){
            initNavs.draw("studyNav");
        }else{

        }
    }
};

function archiveClicked(e){
    const current_menus = document.getElementsByClassName(e.target.menu);
    Array.from(current_menus).forEach( cur => {
        cur.style.display = "none";
    });

    const need_menus = document.getElementsByClassName(e.target.id);
    if(need_menus.length > 0){
        Array.from(need_menus).forEach( need => {
            need.style.display = "initial";
        });
    }else{
        initNavs.studyNav(false);
    }
}

initNavs.navMain(false);
