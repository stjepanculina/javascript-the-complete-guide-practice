const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices);

/* const filteredArray = prices.filter((prices) => {
  return prices > 6;
}); */

const filteredArray = prices.filter(prices => prices > 6) // shorter method.This is where arrow functions shine
console.log(filteredArray);