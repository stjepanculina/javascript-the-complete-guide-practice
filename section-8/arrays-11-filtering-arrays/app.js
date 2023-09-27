const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// sort()ing and reverse()ing

const sortedPrices = prices.sort((a, b) => { // sort() by default, without an parameters in callbackfunction, sorts elements by string order.Setting two parameters in the callbackfunction we make comparison between two elements in array.
  if(a > b) {
    return  1; // sets a before b
  } else if (a === b) {
    return 0; // sets default
  }
  else {
    return -1; // sets a after b
  }
});
// console.log(sortedPrices.reverse()); // reverse an array. 
console.log(sortedPrices);

// filter()

const filteredPrices = prices.filter((price, index, prices) => { // filter has callback function wich takes up to three parameters.1. array(wich it iterates troughout every elemnt in array) 2. index number of each elemnt in array 3. array
    return price > 6;
});

console.log(filteredPrices);