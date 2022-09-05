const restaurant = {
  name: "Italiano",
  openningHour: 8,
  location: "Italy",
  categories: ["Italian", "Pizzeria", "Organic"],
  starterMenu: ["Garlic", "Bread", "Focaccia", "Bruschetta"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openningHour, categories } = restaurant;
console.log(name, openningHour, categories);

let [first, second] = restaurant.categories;
console.log(first, second);

//Skip element using space
const [firsts, , seconds] = restaurant.categories;
console.log(firsts, seconds);

//swap elements using destructuring
[first, second] = [second, first];
console.log(first, second);

//receive 2 return values from a function
const [stater, mainCourse] = restaurant.order(2, 0);
console.log(stater, mainCourse);

//NESTED destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values to remove undefined
const [p, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
