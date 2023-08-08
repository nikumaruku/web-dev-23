let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create a variable to hold the path of the dice image
let diceImage1 = `./images/dice${randomNumber1}.png`;
let diceImage2 = `./images/dice${randomNumber2}.png`;

//let diceImage = "/images/dice" + randomNumber1 + ".png";
//let getImage = document.querySelectorAll('img')[0];
//getImage.setAttribute('src', diceImage);

//document.querySelectorAll('img')[0].setAttribute('src', diceImage);

// Get the left dice image element
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

// Update the source attribute of the left dice image with the random dice image
img1.setAttribute("src", diceImage1);
img2.setAttribute("src", diceImage2);

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Its a draw!"
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    } else {
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    }
    

