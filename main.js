const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const toggleMenu = document.querySelector(".menu");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const cartDetail = document.querySelector(".cart-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
toggleMenu.addEventListener("click", toggleMobileMenu);
cartMenu.addEventListener("click", toggleAsideCart);
productDetailClose.addEventListener("click", closeAsideProuctDetail);

renderProducts(products);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  addInactive(cartDetail, mobileMenu, productDetail);
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  addInactive(cartDetail, desktopMenu, productDetail);
}

function toggleAsideCart() {
  cartDetail.classList.toggle("inactive");
  addInactive(mobileMenu, desktopMenu, productDetail);
}

function openAsideProuctDetail() {
  productDetail.classList.remove("inactive");
  addInactive(cartDetail, mobileMenu, desktopMenu);
}

function closeAsideProuctDetail() {
  productDetail.classList.add("inactive");
  addInactive(cartDetail, mobileMenu, desktopMenu);
}

function addInactive(...elements) {
  elements.forEach((element) => {
    element.classList.add("inactive");
  });
}

function renderProducts(productsArray) {
  productsArray.forEach((element) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", element.image);

    productImg.addEventListener("click", openAsideProuctDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    productPrice.innerText = `$ ${element.price},00`;
    productName.innerText = element.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const cartImg = document.createElement("img");
    cartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(cartImg);

    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  });
}
