let drumNum = document.querySelectorAll(".drum").length; //Obtain count of all drum items

document.addEventListener("keydown", function (e) {
  checkChar(e.key);
  buttonAnimation(e.key);
});

for (let i = 0; i < drumNum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    checkChar(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

function checkChar(letter) {
  switch (letter) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(letter) {
  let clicked = document.querySelector("." + letter);
  clicked.classList.add("pressed");

  setTimeout(function () {
    clicked.classList.remove("pressed");
  }, 100);
}
