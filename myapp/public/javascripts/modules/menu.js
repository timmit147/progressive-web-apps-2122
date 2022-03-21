export function menu(){
    const menuButton = document.querySelector(".menuButton");
    const menu = document.querySelector(".menu");
    menuButton.addEventListener("click", function(){ 
        menu.classList.toggle("menuShow");
        menuButton.classList.toggle("iconSwitch");
    });
}