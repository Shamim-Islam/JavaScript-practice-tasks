// problem no-5

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "You cannot buy the chips, please pay the bill for chips";
  } else {
    let sum = 0;
    for (let item of changeArray) {
      sum += item;
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}

const canpay = canPay([1, 5, 5], 10);
console.log(canpay);
