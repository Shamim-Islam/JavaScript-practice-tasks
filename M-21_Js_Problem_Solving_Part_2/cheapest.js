const mobiles = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xoami", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 25000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function getCheapestObject(mobiles) {
  let min = mobiles[0];
  for (const mobile of mobiles) {
    if (mobile.price < min.price) {
      min = mobile;
    }
  }
  return min;
}

const cheap = getCheapestObject(mobiles);
console.log(
  `The cheapest phone is : ${cheap.name} and price is : ${cheap.price} Tk`
);
