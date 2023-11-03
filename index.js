//dice on left side
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageoutput1 = "./images/" + "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageoutput1);

//dice on right side
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageoutput2 = "./images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageoutput2);

//change heading to the winner's title
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!🥳";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🥳";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}