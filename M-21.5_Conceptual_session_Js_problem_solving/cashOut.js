// Problem-01 : Calculate the cash-out Charge

function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }

  let charge = money * (1.75 / 100);
  charge = parseFloat(charge.toFixed(4));
  return charge;
}
console.log(cashOut("mewauu"));
