const countries = require('./countries');
const webTechs = require('./web_techs');

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

//Remove all the punctuations and change the string to array and 
let stringWithoutPunctuations = text.replace(/[^\w\s]/g, '');
let wordArray = stringWithoutPunctuations.split(' ');

//Count the number of words in the array
let wordCount = wordArray.length;
console.log('Number of words:', wordCount);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
//remove 'Honey' if you are allergic to honey
shoppingCart.pop('Honey');
//modify Tea to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
shoppingCart[teaIndex] = 'Green Tea'
console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const arrayCountries = countries;
if (arrayCountries.includes('ETHIOPIA')) console.log('ETHIOPIA');
else arrayCountries.push('ETHIOPIA');

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const arrayWeb = webTechs;
const sass = arrayWeb.includes('Sass')
if (sass) console.log(sass + 'is a CSS preprocessor');
else arrayWeb.push('Sass');
console.log(arrayWeb);

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


