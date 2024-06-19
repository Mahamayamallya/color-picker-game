let noOfSquares = 6;
let arr = [];
let picked;
let squares = document.getElementsByClassName("square");

let targetColor = document.getElementById("targetColor");
let message = document.getElementById("message");
let resetButton = document.getElementById("NewColor");

init();

function init() {
  // Initialize game
  arr = generateRandomColors(noOfSquares);
  picked = pickColor();
  targetColor.textContent = picked;

  for (let i = 0; i < squares.length; i++) {
    // Assign colors to squares
    squares[i].style.backgroundColor = arr[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;

      if (clickedColor === picked) {
        message.textContent = "Correct!";
        changeColors(clickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
}

// Reset button listener
resetButton.addEventListener("click", function () {
  reset();
});

function reset() {
  // Generate new colors, pick a new color, update display
  arr = generateRandomColors(noOfSquares);
  picked = pickColor();
  targetColor.textContent = picked;
  message.textContent = "";
  resetButton.textContent = "New Colors";

  // Update square colors
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = arr[i];
  }
}

function changeColors(color) {
  // Change all squares to the correct color and change h1 background
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  document.querySelector("h1").style.backgroundColor = color;
}

function pickColor() {
  // Pick a random color from arr
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function generateRandomColors(num) {
  // Generate an array of random colors
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
  // Generate a single random color
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
