const navEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleMenuDesktop);
function toggleMenuDesktop(){
    menuDesktop.classList.toggle("inactive");
}