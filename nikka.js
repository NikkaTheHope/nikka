const nikkaFunc = {
    makeClasses : function(arr,con){
        arr.forEach( str => {
            con.classList.add(str);
        });
    },
    makeHeaderCard : function(data,con){
        const header = document.createElement("header");
        header.innerHTML = data;
        con.append(header);
    }
};

const nikkaTime = {
    normalTime : function(){
        const date = new Date();
        return `${String(date.getHours()).padStart(2,"0")} : ${String(date.getMinutes()).padStart(2,"0")} : ${String(date.getSeconds()).padStart(2,"0")}`;
    },
    normalDate : function(type){
        const date = new Date();
        let res = null;
        switch(type){
            case "ko" :
                res = `${String(date.getDate()).padStart(2,"0")}년 ${String((date.getMonth()+1)).padStart(2,"0")}월 ${String(date.getDate()).padStart(2,"0")}일`;
            break;
            case "-" :
                res = `${String(date.getDate()).padStart(2,"0")}-${String((date.getMonth()+1)).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
            break;
            case "/" :
                res = `${String(date.getDate()).padStart(2,"0")}/${String((date.getMonth()+1)).padStart(2,"0")}/${String(date.getDate()).padStart(2,"0")}`;
            break;
            case "." :
                res = `${String(date.getDate()).padStart(2,"0")}.${String((date.getMonth()+1)).padStart(2,"0")}.${String(date.getDate()).padStart(2,"0")}`;
            break;
        }
    }
};

const body = document.querySelector("body");
nikkaFunc.makeClasses(["flex__container"],body);