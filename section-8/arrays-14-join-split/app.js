// split() method

const data =  "zagreb;10.99;2000";

const transformedData = data.split(";"); // splits a string using specifed seperator into multiple substrings.Returns an array.
console.log(transformedData);

const nameFragments = ["Stefan", "Schwarz"];

const names =  nameFragments.join(" "); //  every element in an array becomes a string seperated by specified separator, returns a string/s
console.log(names);