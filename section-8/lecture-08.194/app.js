const prices = [ 10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

/* for (const price of prices) {
  taxAdjustedPrices.push(price*(1+tax));
}; */

  prices.forEach((price, idx, prices) => { // first argument accepts numbers, second index number, third array number.
  const priceObj = { index: idx, taxAdjPrice: price * (1+tax)} 
    taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);