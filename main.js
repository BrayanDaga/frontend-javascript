

const listProduct = [
  {
    name: "Bike",
    price: 120.0,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Tv",
    price: 200.0,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computer",
    price: 800.0,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];
const navEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const hambMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const containerProducts = document.querySelector(".cards-container");
const productPreview = document.querySelector(".product-preview");
const imgClose = document.querySelector("#imgClose");

navEmail.addEventListener("click", function () {
  productDetail.classList.add("inactive");
  toogleContent(menuDesktop);
});
hambMenu.addEventListener("click", function () {
  productDetail.classList.add("inactive");
  productPreview.classList.add("inactive");
  toogleContent(menuMobile);
});
shoppingCart.addEventListener("click", function () {
  menuDesktop.classList.add("inactive");
  menuMobile.classList.add("inactive");
  productPreview.classList.add("inactive");
  toogleContent(productDetail);
});

imgClose.addEventListener("click", function(){
  productPreview.classList.add("inactive");
});

function toogleContent(element) {
  return element.classList.toggle("inactive");
}


function renderListProducts() {
    listProduct.forEach(product => {
        containerProducts.innerHTML += `<div class="product-card">
        <img
          src="${product.image}"
          alt="" id="img-product-preview">
        <div class="product-info">
          <div>
            <p>${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure >
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
        </div>`;
     });
     renderButtons()


}

renderListProducts();

function renderButtons(){
  const imgsProducts = productImg = document.querySelectorAll("#img-product-preview");
  for (let i = 0; i < imgsProducts.length; i++) {
    const imgProduct = imgsProducts[i];
    //4 Aggiungo l'event  listener
    imgProduct.addEventListener("click",function(){
      productPreview.classList.remove("inactive");
      menuMobile.classList.add("inactive")
    })
  }
}

