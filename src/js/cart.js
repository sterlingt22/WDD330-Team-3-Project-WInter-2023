import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// if there are items in the cart, total will be displayed
function renderCartTotal() {
  const cartItems = getLocalStorage("so-cart");

  document.getElementById("cart-footer").classList.remove("hide");
  let cartTotal = 0;

  for (let i = 0; i < cartItems.length; i++) {
    cartTotal += cartItems[i]['FinalPrice'];
  }
  cartTotal = numberWithCommas(cartTotal);

  const cartTotalContent = document.createTextNode(cartTotal);
  document.getElementById("cart-footer").appendChild(cartTotalContent);
}

renderCartContents();
renderCartTotal();
