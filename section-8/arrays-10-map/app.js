
/* const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

  prices.forEach((price, idx, prices) => { // 
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices); */

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => { // unlike forEach(), map() has to return something. map() takes an array, runs a call back fuction on each element in array then returns it.It doesn not change pointed array but makes a new one
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) }; //arguments => elemnt in array, index number, array number same as forEach()
  return priceObj;
});

console.log(prices, taxAdjustedPrices);
