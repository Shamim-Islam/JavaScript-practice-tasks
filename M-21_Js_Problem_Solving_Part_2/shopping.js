// shirt price - 500
// pant price - 800
// shoe price - 2000

function totalShopping(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 300;
  const pantPrice = 800;
  const shoePrice = 2000;

  const shirtTotalPrice = shirtQuantity * shirtPrice;
  const pantTotalPrice = pantQuantity * pantPrice;
  const shoeTotalPrice = shoeQuantity * shoePrice;

  const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

  return totalPrice;
}

const shopping = totalShopping(3, 2, 1);
console.log(shopping);
