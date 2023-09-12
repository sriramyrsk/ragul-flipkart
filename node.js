let cartValue = 0;
let message="";

const productNames = ["fastrack m700", "Fuber", "El Cielo", "oneplus", "Trimmer", "laptop bag", "Led TV", "Canon camera"];
const prices = [700, 489, 1000, 17893, 750, 550, 55000, 25000];
cartEl = document.getElementById("cart-El");
function updateCart(x) {
  cartValue = cartValue + prices[x];
  message="\n"+message+productNames[x] + " : " + prices[x] + "\n\n";
  console.log(message);
  
}
function displayCart() {
  document.getElementById("cart-El").style.display = "block";
  carttxtEl.innerHTML = message+"\nTotal : "+cartValue;

}