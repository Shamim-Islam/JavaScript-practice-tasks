// Calculate the total cost of the products in a shopping cart
const products = [
  { name: "shampoo", price: 300 },
  { name: "conditioner", price: 350 },
  { name: "woodChiruni", price: 500 },
  { name: "facewash", price: 400 },
  { name: "snow", price: 370 },
];

function getShoppingTotal(products) {
  let sum = 0;
  for (const product of products) {
    sum += product.price;
  }
  return sum;
}

const total = getShoppingTotal(products);
console.log(
  `The total cost of the products in a shopping cart is : ${total} Tk`
);
