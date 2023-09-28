
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

const filteredArray = prices.filter(p => p > 6);

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => { // sum of all numbers in an designated array, will iterate each element in array
//   sum += price
// });

// console.log(sum);

const sum = prices.reduce((pricePrevious, currentPrice, currentIndex, prices) => { // currentPrice is a value of each element in array trough iteration
 return  pricePrevious + currentPrice;
},0) // 0 means start of initial value of this iteration (pricePrevious parameter)
// The reduce method calls the callbackfn function one time for each element in the array.
//The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
console.log(sum);