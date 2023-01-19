import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from './ProductDetails.mjs';

// get the product Id
const productId = getParam('product');
// create instance of Product Data class
const dataSource = new ProductData("tents");

// uses above
const product = new ProductDetails(productId, dataSource);
product.init();

/* moved this to Product Details
function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
*/