// Generate a random number between 1 and 6 (inclusive) for the first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Create the filename of the dice image based on the random number
var diceName1 = "images/dice" + randomNumber1 + ".png";

// Set the src attribute of the element with class "img1" to display the appropriate dice image
document.querySelector(".img1").setAttribute("src", diceName1);

// Generate a random number between 1 and 6 (inclusive) for the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create the filename of the dice image based on the random number
var diceName2 = "images/dice" + randomNumber2 + ".png";

// Set the src attribute of the element with class "img2" to display the appropriate dice image
document.querySelector(".img2").setAttribute("src", diceName2);

// Compare the random numbers of both dice
if (randomNumber1 === randomNumber2) {
    // If the random numbers are equal, display "Game Tie!" as the text content of the h1 element
    document.querySelector("h1").textContent = "Game Tie!";
} else if (randomNumber1 > randomNumber2) {
    // If the random number of the first dice is greater, display "Player 1 Won!" as the text content of the h1 element
    document.querySelector("h1").textContent = "Player 1 Won!";
} else if (randomNumber1 < randomNumber2) {
    // If the random number of the second dice is greater, display "Player 2 Won!" as the text content of the h1 element
    document.querySelector("h1").textContent = "Player 2 Won!";
}
