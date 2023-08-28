//Write a program which tells the number of days in a month.
const monthName = prompt("Enter a month:");
const year = parseInt(prompt("Enter a year:"));

const monthsWith31Days = [
  "january",
  "march",
  "may",
  "july",
  "august",
  "october",
  "december",
];
const monthsWith30Days = ["april", "june", "september", "november"];

let daysInMonth;

if (monthsWith31Days.includes(monthName.toLowerCase())) {
  daysInMonth = 31;
} else if (monthsWith30Days.includes(monthName.toLowerCase())) {
  daysInMonth = 30;
} else if (monthName.toLowerCase() === "february") {
  // Check for leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth = 29; // February in a leap year
  } else {
    daysInMonth = 28; // February in a non-leap year
  }
} else {
  console.log("Invalid month.");
  daysInMonth = -1; // Indicate an invalid input
}

if (daysInMonth !== -1) {
  console.log(`The month of ${monthName} in ${year} has ${daysInMonth} days.`);
}
