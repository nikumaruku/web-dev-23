const countries = require("./level2/countries");
/*PART 1*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(ages);

//Find the median age(one middle item or two middle items divided by two)
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 1) {
  const median = ages[middleIndex];
  console.log("Median age:", median);
} else {
  const median = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
  console.log("Median age:", median);
}

//Find the average age(all items divided by number of items)
let sumAge = 0;
for (i = 0; i < ages.length; i++) {
  sumAge += ages[i];
}
const avgAge = sumAge / ages.length;
console.log(avgAge);

//Find the range of the ages(max minus min)
const min = ages[0];
const max = ages[ages.length - 1];
const ageRange = max - min;
console.log(ageRange);

//Compare the value of (min - average) and (max - average), use abs() method
const minWon = Math.abs(minAge - avgAge);
const maxWon = Math.abs(maxAge - avgAge);

if (diffMin > diffMax)
  console.log(`The absolute difference (min - average) is larger: ${diffMin}`);
if (diffMin < diffMax)
  console.log(`The absolute difference (max - average) is larger: ${diffMax}`);
else console.log("The absolute differences are equal.");

/*PART 2*/
//Slice the first ten countries from the countries array
