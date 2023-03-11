const navEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const hambMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navEmail.addEventListener("click", function(){ 
    productDetail.classList.add("inactive");
    toogleContent(menuDesktop) 
});
hambMenu.addEventListener("click", function(){ 
    productDetail.classList.add("inactive");
    toogleContent(menuMobile) 
});
shoppingCart.addEventListener("click", function(){
    menuDesktop.classList.add("inactive");
    menuMobile.classList.add("inactive");
    toogleContent(productDetail);
});

function toogleContent(element){
    return element.classList.toggle("inactive");
}
