"use strict";

const restaurant = {
  name: "Italiano",
  location: "Italy",
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Garlic", "Bread"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};
console.log(
  `${restaurant.name} ${restaurant.location} ${restaurant.categories} ${restaurant.starterMenu} ${restaurant.mainMenu}`
);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);
