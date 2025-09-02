const product = {
  name: "shirt",
  price: 500,
  quantity: 7,
};
// way----------1
// const discount = (product.price * 20) / 100;
// const yourPay = product.price - discount;
// const vatAmount = (product.price * 7) / 100;
// const totalAmount = yourPay + vatAmount;

// way ---------------- 2
// const price = product.price;

// const discount = (price * 20) / 100;
// const yourPay = price - discount;
// const vatAmount = (price * 7) / 100;
// const totalAmount = yourPay + vatAmount;
// console.log(totalAmount);

//way -----------------------------3
const {
  price,
  name,
  quantity,
  tax = 5,
} = {
  name: "shirt",
  price: 500,
  quantity: 7,
};
// console.log(price, name, quantity, tax);

const discount = (price * 20) / 100;
const yourPay = price - discount;
const vatAmount = (price * 7) / 100;
const totalAmount = yourPay + vatAmount;
// console.log(totalAmount);

// another example

const device = { name: "phone", brand: "samsung", price: 17000 };
const { brand } = device;
// console.log(brand);

// array destructuring
const numbers = [25, 88, 89, 101];
const [first, second] = [90, 99];
// console.log(first);

const [math, physics] = [90, 99];
console.log(`physics marks is : ${physics}`);
