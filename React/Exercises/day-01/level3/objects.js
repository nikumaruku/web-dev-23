const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [],
  expenses: [],

  // Method to calculate total income
  totalIncome: function () {
    let total = 0;
    for (const income of this.incomes) {
      total += income.amount;
    }
    return total;
  },

  // Method to calculate total expenses
  totalExpense: function () {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },

  // Method to display account information
  accountInfo: function () {
    return `Account Information for ${this.firstName} ${
      this.lastName
    }: Total Income - $${this.totalIncome()}, Total Expenses - $${this.totalExpense()}`;
  },

  // Method to add income
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },

  // Method to add expense
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },

  // Method to calculate account balance
  accountBalance: function () {
    const balance = this.totalIncome() - this.totalExpense();
    return balance;
  },
};

// Adding some example incomes and expenses
personAccount.addIncome("Salary", 3000);
personAccount.addIncome("Freelance", 500);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Groceries", 200);

// Displaying account information and balance
console.log(personAccount.accountInfo());
console.log("Account Balance:", personAccount.accountBalance());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Function to find a user by username
function findUserByUsername(username) {
  return users.find((user) => user.username === username);
}

// Function to sign up a new user
function signUp(username, email, password) {
  const existingUser = findUserByUsername(username);
  if (existingUser) {
    return "User already exists.";
  } else {
    const newUser = {
      _id: Math.random().toString(36).substr(2, 9), // Generating a simple ID
      username,
      email,
      password,
      createdAt: new Date().toLocaleString(),
      isLoggedIn: false,
    };
    users.push(newUser);
    return "User registered successfully.";
  }
}

// Function to sign in a user
function signIn(username, password) {
  const user = findUserByUsername(username);
  if (user && user.password === password) {
    user.isLoggedIn = true;
    return "Logged in successfully.";
  } else {
    return "Invalid username or password.";
  }
}

// Function to rate a product
function rateProduct(productId, userId, rating) {
  const product = products.find((prod) => prod._id === productId);
  if (product) {
    product.ratings.push({ userId, rate: rating });
    return "Product rated successfully.";
  } else {
    return "Product not found.";
  }
}

// Function to calculate average rating of a product
function averageRating(productId) {
  const product = products.find((prod) => prod._id === productId);
  if (product && product.ratings.length > 0) {
    const totalRating = product.ratings.reduce(
      (sum, rating) => sum + rating.rate,
      0
    );
    return totalRating / product.ratings.length;
  } else {
    return "No ratings available for this product.";
  }
}

// Function to like or unlike a product
function likeProduct(productId, userId) {
  const product = products.find((prod) => prod._id === productId);
  if (product) {
    const userIndex = product.likes.indexOf(userId);
    if (userIndex !== -1) {
      product.likes.splice(userIndex, 1); // Remove like
    } else {
      product.likes.push(userId); // Add like
    }
    return "Product liked/unliked successfully.";
  } else {
    return "Product not found.";
  }
}

// Example usage:
console.log(signUp("Alice", "alice@example.com", "alice123")); // User registered successfully.
console.log(signIn("Alice", "alice123")); // Logged in successfully.
console.log(rateProduct("aegfal", "ab12ex", 4)); // Product rated successfully.
console.log(averageRating("aegfal")); // 4
console.log(likeProduct("eedfcf", "ab12ex")); // Product liked/unliked successfully.
