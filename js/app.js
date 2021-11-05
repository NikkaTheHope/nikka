menus.forEach(menu=>{
    nav.appendChild(createNavBt(menu));
});
body.appendChild(nav);

function createNavBt(str){
    const div = document.createElement("div");
    vjs.addclasses(["nav_bt"],div);
    div.innerText = str;
    return div;
}