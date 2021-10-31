const nav = document.createElement("div");
nikkaFunc.makeClasses(["flex__container","card__normal","row"],nav);
const header = document.createElement("header");
header.innerText = "HEADER";
header.addEventListener("click",function(){nikkaFunc.makeBtnShow(nav.children,header,"display");});
nav.append(header);

const archive = {
    indexNav : {
        study : {
            id : 'studyNav',
            name : "Study"
        },
        menu_02 : {
            id : '002',
            name : "menu 02"
        },
        menu_03 : {
            id : '003',
            name : "menu 03"
        }
    },
    studyNav : {
        javascript : {
            id : '001_001',
            name : 'Javascript | 자바스크립트'
        },
        linux : {
            id : '001_002',
            name : 'Linux | 리눅스'
        }
    }
};

const initNavs = {
    navMain : function(){
        const arr = [];
        Object.keys(archive.indexNav).forEach( i => {
            const div = document.createElement("div");
            div.innerText = archive.indexNav[i].name;
            nikkaFunc.makeClasses(["btn"],div);
            nav.append(div);
            arr.push(div);
            div.addEventListener("click",this[archive.indexNav[i].id]);
        });
        body.append(nav);
        return arr;
    },
    studyNav : function(){
        const arr = [];
        console.log("aaaa");
    }
};

const navMain = initNavs.navMain();
console.log(navMain);
