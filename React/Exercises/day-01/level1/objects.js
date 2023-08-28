// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);

// Add name, legs, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Mimi";
dog.legs = 4;
dog.color = "Black";
dog.age = 3;
dog.bark = function () {
  return "Woof woof";
};

// Get name, legs, age and bark value from the dog object
console.log("Name:", dog.name);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.breed = "Chihuahua";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs.`;
};

// Get dog information using the new method
console.log(dog.getDogInfo());
