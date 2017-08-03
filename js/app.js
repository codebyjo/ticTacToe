/* while (gameIsActive) {

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

}  */

let playerToken;
let computerToken;

$(document).ready(function() {

 $("#xButton").click( () => {
   userTurn = true;
   playerToken = "X";
   computerToken = "O";
   $("#modal-background").hide();
   placeListeners();
 });

 $("#oButton").click( () => {
   userTurn = false;
   playerToken = "O";
   computerToken = "X";
   $("#modal-background").hide();
   placeListeners();
 });

 const grid = [
   ['', '', ''],
   ['', '', ''],
   ['', '', '']
 ];

// when win then game is over,  if winningArray is reached, then stop game,

 function isGameOver() {
     //is game over? here check rows
     for (var i = 0; i <3; i++) {
       if ( grid[i][0] !== "" && grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2]) {
         return grid[i][0];
       }
     }

 // check for winners

   //check column
   for (var j = 0; j <3; j++) {
     if (grid[0][j] !== " " && grid[0][j] === grid[1][j] && grid[0][j] === grid[2][j]) {
       return grid[0][j];
     }
   }

   //check diagonal left top to right down
   if (grid[0][0] !== " " && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
     return grid[0][0];
   }

   //check diagonal top right to bottom dow
   if (grid[2][2] !== " " && grid[2][2] === grid[1][1] && grid[2][2] === grid[0][0]) {
     return grid[0][2];
   }
 }

 function placeListeners() {

  $('td').click(function(){
    let $this = $(this);
    $this.html(playerToken);
    const i = $this.data('i');
    const j = $this.data('j');
    grid[i][j] = playerToken;
  });

  $('td').hover( function() {
    let $this = $(this);

    if ($this.text() === '\xa0') {
      $this.css('background-color', '#bdc3c7');
      $this.css('cursor', 'pointer');
    }
  }, function() {
    let $this = $(this);
    $this.css('background-color', 'transparent');
    $this.css('cursor', 'default');
  });

 }

   // alternatve players


    /*     let empty = true;
         for (var i=0; i<3; i++) {
           for (var j = 0; j < 3; j++) {
             if (grid[i][j]=== " ") {
               return false;
             }
           }
         }
         return null;
       }

  /*   function moveAI() {
         for (var i=0; i<3; i++) {
           for (var j = 0; j < 3; j++) {
            if (grid[i][j]=== " ") {
               return {
                 i: i,
                 j: j
               };
             }
           }
         }
         return null;
       } */

 /*function computerMove(){
  }; */

    /*  let gameState = isGameOver()
      if (gameState) {
        alert('game over: ' + gameState);

        {if (isGameOver()) {
      }

      } else {
        //move the computer
        const move = moveAI()
        grid[move.i][move.j] = COMPUTER_TOKEN;
      }
      let gameState = isGameOver()
      if (gameState) {
        alert('game over: ' + gameState);
      }

  */

});
