
to win horizontal, match this in any row [true, true, true].
to win vertical, must match all rows to [true, null, null], or [null, true, null], or [null, null, true]
to win diagonal, gameArray must match this pattern: [ [true, null, null], [null, true, null], [null, null, true] ] or [ [null, null, true], [null, true, null], [true, null, null] ]

 


//variables
var gameArray = [ [undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined] ]; // user = 1, computer = 0
var userTurn = undefined;
var currentPlayer = "X";
var gameIsActive = true; //this tells us when game is active, otherwise game over, prompt start again

 $(".xButton").click( function() { userTurn = true; });
 $(".oButton").click( function() { userTurn = false; });

 while (gameIsActive) {

      if (userTurn) {
        userMove();
      } else {
        computerMove();
      }

      if (currentPlayer == "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }

      if (winnerFound() == "User" || winnerFound() == "Computer") {
        userTurn = undefined;
      }

 }

function winnerFound() {
  // if winningArray is reached, then stop game, if array is (1,1,1) --> then user wins, if array is (2,2,2) --> then computer wins
  return "User" or "Computer" or null;
}

function userMove() {
  // set listener to all open positions. wait for user to pick, puts position into array, change to 1
}

function computerMove() {
  // set randomly to whichever array number is set to 0, change to 2
}

 