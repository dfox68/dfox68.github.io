var currentScore = 0;
var targetScore = 0;
var crystal;
var numHtml = "<p>Score to match: "+ makeRandomNum +"</p>";
//startGame function

//display random number between 19-120. This is the score that the user is trying to match
var makeRandomNum = function(min, max ) {
  return Math.floor(Math.random() * ((19-120) + 1 )) + 19;
  Math.floor(Math.random()
console.log(makeRandomNum);
$("#ranNum").html(makeRandomNum);
};
var startGame = function() {

};
