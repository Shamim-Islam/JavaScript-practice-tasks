const hero = {
  name: "Sakib khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["apu", "Riaz", "Salman", "aamir"],
  act: function () {
    console.log("acting like Sakib khan");
  },
  car: {
    brand: "tesla",
    price: 500000,
    made: 2022,
    manufacturer: {
      name: "Tesla",
      ceo: "Elon Mask",
      country: "Usa",
    },
  },
};

console.log(hero.act());
hero.act();
