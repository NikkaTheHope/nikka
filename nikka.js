const nikkaFunc = {
    makeClasses : function(arr,con){
        arr.forEach( str => {
            con.classList.add(str);
        });
    },
    makeHeaderCard : function(data,con){
        const header = document.createElement("header");
        header.innerHTML = data;
        con.append();
    }
};

const body = document.querySelector("body");
nikkaFunc.makeClasses(["flex__container"],body);