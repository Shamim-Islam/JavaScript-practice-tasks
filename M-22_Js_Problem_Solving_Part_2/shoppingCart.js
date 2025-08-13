//
const products = [
  { name: "shampoo", price: 300, quantity: 5 },
  { name: "conditioner", price: 350, quantity: 3 },
  { name: "woodChiruni", price: 500, quantity: 4 },
  { name: "facewash", price: 400, quantity: 2 },
  { name: "snow", price: 370, quantity: 1 },
];

function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    const thisProductCost = product.price * product.quantity;
    total += thisProductCost;
  }
  return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);
