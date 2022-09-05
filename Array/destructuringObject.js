const restaurant = {
  name: "Italiano",
  location: "Italy",
  categories: ["Italian", "Pizzeria", "Organic"],
  starterMenu: ["Garlic", "Bread", "Focaccia", "Bruschetta"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openningHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const { name, openningHour, categories } = restaurant;
console.log(name, openningHour, categories);

//values different from properties
const {
  name: restaurantName,
  openningHour: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//dealing with thirdparty data
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating values
let a = 111,
  b = 999,
  C = 12;
const obj = { a: 23, b: 4, C: 14 };

({ a, b, C } = obj);
console.log(a, b, C);

//Nested Object
const { fri } = openningHour;
console.log(fri);

const {
  fri: { open: o, close: c },
} = openningHour;
console.log(o, c);

const {
  sat: { open, close },
} = openningHour;
console.log(open, close);

//passing object
restaurant.orderDelivery({
  time: "23:30",
  address: "via del 22",
  mainIndex: 2,
  starterIndex: 2,
});

