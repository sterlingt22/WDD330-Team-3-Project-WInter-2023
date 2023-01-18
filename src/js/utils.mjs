// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {

  // check if there is anything in local storage. If not,
  // create an empty array and add item. Otherwise, parse and add
  const cartItems = (() => {
    const itemData = localStorage.getItem(key);
    return itemData === null ? []
    : JSON.parse(itemData);
  })();
  cartItems.push(data);

  // save data to local storage
  localStorage.setItem(key, JSON.stringify(cartItems));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get('product')
  console.log(queryString);

}