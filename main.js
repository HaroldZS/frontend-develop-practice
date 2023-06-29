const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const toggleMenu = document.querySelector(".menu");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const cartDetail = document.querySelector(".cart-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
toggleMenu.addEventListener("click", toggleMobileMenu);
cartMenu.addEventListener("click", toggleAsideCart);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  addInactive(cartDetail, mobileMenu);
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  addInactive(cartDetail, desktopMenu);
}

function toggleAsideCart() {
  cartDetail.classList.toggle("inactive");
  addInactive(mobileMenu, desktopMenu);
}

function addInactive(...elements) {
  elements.forEach(element => {
    element.classList.add("inactive");
  });
}