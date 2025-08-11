//Problem no -4

function findAddress(obj) {
  let street = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";

  return `${street},${house}, ${society} `;
  //return `${obj.street || "__"},${obj.house || "__"}, ${obj.society || "__"}`;
}

const obj = { street: 10, house: "15A" };
console.log(findAddress(obj));
