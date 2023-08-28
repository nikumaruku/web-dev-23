// Declare an empty array
let emptyArray = [];

// Declare an array with more than 5 elements
let numbersArray = [1, 2, 3, 4, 5, 6, 7];

// Find the length of the array
let numbersArrayLength = numbersArray.length;

// Get the first item, the middle item, and the last item of the array
let firstItem = numbersArray[0];
let middleItem = numbersArray[Math.floor(numbersArray.length / 2)];//*
let lastItem = numbersArray[numbersArray.length - 1];

// Declare an array with mixed data types
let mixedDataTypes = [1, 'two', true, null, { key: 'value' }];

// Find the length of the mixedDataTypes array
let mixedDataTypesLength = mixedDataTypes.length;

// Declare an array of IT companies
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log('Number of companies:', itCompanies.length);

// Print the first company, middle, and last company
console.log('First company:', itCompanies[0]);
console.log('Middle company:', itCompanies[Math.floor(itCompanies.length / 2)]);
console.log('Last company:', itCompanies[itCompanies.length - 1]);

// Print out each company
itCompanies.forEach(company => {
    console.log(company);
});

// Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => {
    console.log(company.toUpperCase());
});

// Print the array like a sentence
console.log(itCompanies.join(', ') + ' are big IT companies.');

// Check if a certain company exists in the itCompanies array
let companyToCheck = 'Google';
if (itCompanies.includes(companyToCheck)) {
    console.log(companyToCheck + ' exists in the array.');
} else {
    console.log(companyToCheck + ' is not found in the array.');
}

// Filter out companies with more than one 'o'
let filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
    let oCount = (itCompanies[i].split('o').length - 1);
    if (oCount <= 1) {
        filteredCompanies.push(itCompanies[i]);
    }
}
console.log(filteredCompanies);

// Sort the array using sort() method
let sortedCompanies = itCompanies.slice().sort();

// Reverse the array using reverse() method
let reversedCompanies = itCompanies.slice().reverse();

// Slice out the first 3 companies from the array
let first3Companies = itCompanies.slice(0, 3);

// Slice out the last 3 companies from the array
let last3Companies = itCompanies.slice(-3);

// Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompany = itCompanies.slice(middleIndex, middleIndex + 1);

// Remove the first IT company from the array
itCompanies.shift();

// Remove the middle IT company or companies from the array
itCompanies.splice(middleIndex, 1);

// Remove the last IT company from the array
itCompanies.pop();

// Remove all IT companies
itCompanies = [];
