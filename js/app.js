menus.forEach(menu=>{
    const data = createNavBt(menu)
    data.addEventListener("click", changeContent);
    nav.appendChild(data);
});
body.appendChild(nav);

body.appendChild(content);

function createNavBt(str){
    const div = document.createElement("div");
    vjs.addclasses(["nav_bt"],div);
    div.style.border = "solid var(--base-c ) 3px";
    div.innerText = str;
    return div;
}

function changeContent(e){
    content.innerText = e.target.innerText;
}