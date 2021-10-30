const nikkaFunc = {
    makeClasses : function(arr,con){
        arr.forEach( str => {
            con.classList.add(str);
        });
    },
    makeNormalCard : function(){
        
    }
};

const body = document.querySelector("body");
nikkaFunc.makeClasses(["flex__container"],body);