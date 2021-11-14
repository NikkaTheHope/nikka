const body = document.querySelector("body");

const bts = {
    express : {
        title:"Express(NodeJS) - Excel/SpreadSheet, Notion, Express",
        url:"http://raywkd.cafe24.com:3000"
    },
    vjs : {
        title:"VanillaJS - ETC Informations",
        url:"http://raywkd.cafe24.com:8881"
    }
};

Object.keys(bts).forEach(e=>{
    const div = document.createElement("div");
    div.addEventListener("click", function(){
        window.location.href=bts[e].url;
    });
    div.innerText = bts[e].title;
    div.classList.add("links")
    body.append(div);
});
