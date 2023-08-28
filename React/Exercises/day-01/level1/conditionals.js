//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) console.log("You are old enough to drive.");
else {
  const yearsToWait = 18 - userAge;
  console.log(
    `You are not old enough to drive. You need to wait ${yearsToWait} year(s) to turn 18.`
  );
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const myAge = 22;
const urAge = parseInt(prompt("Enter your age:"));
if (myAge > urAge)
  console.log(`Im ${myAge - urAge} year(s) older then you bruh`);
else console.log(`Ure ${urAge - myAge} year(s) older then me bruh`);

//If a is greater than b return 'a is greater than b' else 'a is less than b'
let a = 4;
let b = 3;
a > b ? console.log("a > b") : console.log("b > a");

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const numbers = parseInt(prompt("Enter a number:"));
numbers % 2 === 0 ? `${numbers} is even` : `${numbers} is odd`;

