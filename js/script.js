// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
  let userchoice = $("#input").val();
  $("#userChoice").text(userchoice);
  let yourmove = userchoice.toLowerCase();
  // gets value from input making it lowercase and prints text
  let num = Math.random() * 3;
  num = Math.ceil(num);
  // random number generator
  // rock=1
  // paper=2
  // scissors=3
  $("#rock").hide();
  $("#paper").hide();
  $("#scissors").hide();
  $("#rock2").hide();
  $("#paper2").hide();
  $("#scissors2").hide();

  if ((num === 1) & (yourmove === "rock")) {
    $("#computerChoice").text("Rock");
    $("#rock2").show();
    $("#rock").show();
    $("#result").text("Draw");
  } else if ((num === 1) & (yourmove === "paper")) {
    $("#computerChoice").text("Rock");
    $("#rock2").show();
    $("#paper").show();
    $("#result").text("You Win!");
  } else if ((num === 1) & (yourmove === "scissors")) {
    $("#computerChoice").text("Rock");
    $("#rock2").show();
    $("#scissors").show();
    $("#result").text("Computer Wins");
  } else if ((num === 2) & (yourmove === "rock")) {
    $("#computerChoice").text("Paper");
    $("#paper2").show();
    $("#rock").show();
    $("#result").text("Computer Wins");
  } else if ((num === 2) & (yourmove === "paper")) {
    $("#computerChoice").text("Paper");
    $("#paper2").show();
    $("#paper").show();
    $("#result").text("Draw");
  } else if ((num === 2) & (yourmove === "scissors")) {
    $("#computerChoice").text("Paper");
    $("#paper2").show();
    $("#scissors").show();
    $("#result").text("You Win!");
  } else if ((num === 3) & (yourmove === "rock")) {
    $("#computerChoice").text("Scissors");
    $("#scissors2").show();
    $("#rock").show();
    $("#result").text("You Win!");
  } else if ((num === 3) & (yourmove === "paper")) {
    $("#computerChoice").text("Scissors");
    $("#scissors2").show();
    $("#paper").show();
    $("#result").text("Computer Wins");
  } else if ((num === 3) & (yourmove === "scissors")) {
    $("#computerChoice").text("Scissors");
    $("#scissors2").show();
    $("#scissors").show();
    $("#result").text("Draw");
  } else {
    $("#result").text("Not Valid Input");
  }
  // conditionals to print computers choice/mychoice based on number
  // and print winner, loser, or draw
});
