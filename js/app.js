const links = document.getElementsByClassName("link");

Array.from(links).forEach(function (link){
    link.addEventListener("click", function(e){
        const url = link.lastElementChild.value;
        window.open(url);
    });
});
