const listProduct = [
  {
    id: 1,
    name: "Bike",
    price: 120.0,
    category: "others",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 2,
    name: "Tv",
    category: "electronics",
    price: 200.0,
    image:
      "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Computer",
    price: 800.0,
    category: "electronics",
    image:
      "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Jackket",
    price: 150.0,
    category: "clothes",
    image:
      "https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "sofa",
    price: 800.0,
    category: "forniture",
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Mario Bros",
    price: 800.0,
    category: "toys",
    image:
      "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600",
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

renderListProducts();

function toogleContent(element) {
  return element.classList.toggle("inactive");
}

function renderListProducts() {
  listProduct.forEach((product) => {
    containerProducts.innerHTML += `<div class="product-card">
        <img
          src="${product.image}"
          alt="" id="img-product-preview" data-index=${product.id}>
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
  renderButtons();
}

function renderButtons() {
  const imgsProducts = (productImg = document.querySelectorAll(
    "#img-product-preview"
  ));
  for (let i = 0; i < imgsProducts.length; i++) {
    const imgProduct = imgsProducts[i];

    imgProduct.addEventListener("click", function () {
      const productid = imgProduct.dataset.index;
      productPreview.classList.remove("inactive");

      productPreview.innerHTML = renderProductPreview(productid);

      const imgClose = document.querySelector("#imgClose");
      imgClose.addEventListener("click", function () {
        productPreview.classList.add("inactive");
      });
      menuMobile.classList.add("inactive");
    });
  }
}

function renderProductPreview(productid) {
  let productSelect = listProduct.find(function (product) {
    return product.id == productid;
  });
  return `<div class="product-preview-close"  id="imgClose">
  <img src="./icons/icon_close.png" alt="close">
</div>
<img
  src="${productSelect.image}"
  alt="${productSelect.name}">
<div class="product-info">
  <p>$${productSelect.price}</p>
  <p>${productSelect.name}</p>
  <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
  <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
  </button>
</div>`;
}
