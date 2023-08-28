// Find the person with the most skills
let mostSkillsPerson = null;
let maxSkills = 0;
for (const person in users) {
  if (users[person].skills.length > maxSkills) {
    console.log(user[person]);
    maxSkills = users[person].skills.length;
    mostSkillsPerson = person;
  }
}
console.log("Person with the most skills:", mostSkillsPerson);

// Count logged in users
let loggedInCount = 0;
for (const person in users) {
  if (users[person].isLoggedIn) {
    loggedInCount++;
  }
}
console.log("Logged in users:", loggedInCount);

// Count users with 50 or more points
let highPointsCount = 0;
for (const person in users) {
  if (users[person].points >= 50) {
    highPointsCount++;
  }
}
console.log("Users with 50 or more points:", highPointsCount);

// Find people who are MERN stack developers
const mernDevelopers = [];
for (const person in users) {
  const skills = users[person].skills;
  if (
    skills.includes("MongoDB") &&
    skills.includes("Express") &&
    skills.includes("React") &&
    skills.includes("Node")
  ) {
    mernDevelopers.push(person);
  }
}
console.log("MERN stack developers:", mernDevelopers);

// Set your name in the users object without modifying the original users object
const modifiedUsers = { ...users, Niku: {} };

// Get all keys or properties of users object
const userKeys = Object.keys(users);
console.log("User keys:", userKeys);

// Get all the values of users object
const userValues = Object.values(users);
console.log("User values:", userValues);
