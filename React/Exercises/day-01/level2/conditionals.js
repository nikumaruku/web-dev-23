//Write a code which can give grades to students according to theirs scores
const score = parseFloat(prompt("Enter your score:"));

if (score >= 80 && score <= 100) console.log("Your grade is A.");
if (score >= 70 && score < 80) console.log("Your grade is B.");
if (score >= 60 && score < 70) console.log("Your grade is C.");
if (score >= 50 && score < 60) console.log("Your grade is D.");
if (score >= 0 && score < 50) console.log("Your grade is F.");
else console.log("Invalid score.");

//Check if the season is Autumn, Winter, Spring or Summer
const month = prompt("Enter a month:");

switch (month.toLowerCase()) {
  case "september":
  case "october":
  case "november":
    console.log("The season is Autumn.");
    break;
  case "december":
  case "january":
  case "february":
    console.log("The season is Winter.");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The season is Spring.");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The season is Summer.");
    break;
  default:
    console.log("Invalid input.");
}

//Check if a day is weekend day or a working day.
const day = prompt("Enter a day:");

const workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

if (workingDays.includes(day.toLowerCase())) console.log("It's a working day.");
if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday")
  console.log("It's a weekend day.");
else console.log("Invalid input.");
