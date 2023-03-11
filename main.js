const navEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const hambMenu = document.querySelector(".menu");

navEmail.addEventListener("click", function(){ toogleContent(menuDesktop) });
hambMenu.addEventListener("click", function(){ toogleContent(menuMobile) });

function toogleContent(element){
    return element.classList.toggle("inactive");
}