function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitprocessor(apples, organes) {
  const applesPieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(organes);
  const juice = `juice with ${applesPieces} apples and ${orangesPieces} oranges`;
  return juice;
}
console.log(fruitprocessor(2, 3));

 