var currentScore;
var crystal;
var compRandomNum;
var ranNumLeftButton;
var ranNumMidddleButton;
var ranNumRightButton;
var ranNumEmeraldButton;


$(document).ready(function() {
  $("#ranNum").html("Score to match: " + compRandomNum);
});
$("#score").html("Your current score is " + currentScore);

function randomIntFromComp() {
  return compRandomNum = Math.floor(Math.random() * 101 + 19);

}

function ranIntLeftButton() {
  return ranNumLeftButton = Math.floor(Math.random() * 11 + 1);
}

function ranIntMidButton() {
  return ranNumMidddleButton = Math.floor(Math.random() * 11 + 1);
}

function ranIntRightButton() {
  return ranNumRightButton = Math.floor(Math.random() * 11 + 1);
}

function ranIntEmeraldButton() {
  return ranNumEmeraldButton = Math.floor(Math.random() * 11 + 1);
}

randomIntFromComp();


$("#btnLeft").click(function() {
 currentScore = (ranNumLeftButton + currentScore);
 console.log(currentScore);
});

ranIntMidButton();


ranIntRightButton();

ranIntEmeraldButton();
