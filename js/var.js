const body = document.querySelector("body");
vjs.addclasses(["flex_container","f_col"],body);

const nav = document.createElement("div");
vjs.addclasses(["nav","flex_container","f_row"],nav);
const menus = ["a","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c","b","c"];

const content = document.createElement("div");
content.id = "content";
content.style.height = (innerHeight*0.85)+"px";