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
    },
    makeDivContent : function(data,obj,bool){
        const div = document.createElement("div");
        div.innerText = data;
        obj.append(div);
        if(bool){
            div.classList.add("card__normal");
        }
    },
    makeBtnShow : function(arr, btn, type){
        Array.from(arr).filter( i => {
            if(i !== btn){
                if(type === "display"){
                    if(i.style.display === "none"){
                        i.style.display = "block";
                    }else{
                        i.style.display = "none";
                    }
                }else{
                    if(i.style.visibility === "hidden"){
                        i.style.visibility = "visible";
                    }else{
                        i.style.visibility = "hidden";
                    }
                }
            }
        })
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