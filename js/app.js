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
   ['\xa0', '\xa0', '\xa0'],
   ['\xa0', '\xa0', '\xa0'],
   ['\xa0', '\xa0', '\xa0']
 ];

// when win then game is over,  if winningArray is reached, then stop game,

 function isGameOver() {
     
   //Check rows for matching tokens.
   
  for (var i = 0; i < 3; i++) {
    if (grid[i][0] !== '\xa0' && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {return grid[i][0];}
  }
  
   //Check columns for matching tokens.
  for (var j = 0; j < 3; j++) {
    if (grid[0][j] !== '\xa0' && grid[0][j] === grid[1][j] && grid[0][j] === grid[2][j]) {return grid[0][j];}
  }
   
  //Check diagonals backward slash for matching tokens.
  if (grid[0][0] !== '\xa0' && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
    return grid[0][0];
  }
   
  //Check diagonal forward slash for matching tokens.
  if (grid[2][0] !== '\xa0' && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2]) {
    return grid[2][0];
  }

   for (var i = 0; i < 3; i++){
      for (var j= 0; j < 3; j++ ) {
        if (grid[i][j] === '\xa0') {
          return 'not empty';
        }
      }

   }
   return null;
 }


 function moveComputer(){
  for (var i=0; i <3; i++){
    for (var j= 0; j<3; j++){
      if (grid[i][j] === '\xa0'){
        return [i, j];
      }
    }
  }
  return null
 }

 function placeListeners() {

  $('td').click(function(){
    let $this = $(this);
    $this.html(playerToken);
    const i = $this.data('i');
    const j = $this.data('j');
    grid[i][j] = playerToken;

    let gameState = isGameOver();
  
    if (gameState){
      setTimeout(function() {
        alert('Game Over!');
      }, 1000);
    } else {
          const move = moveComputer()
          grid[move.i][move.j]= computerToken;
          $('td[data-i=' + move.i + '][data-j=' + move.j + ']').html(computerToken);
        }
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


  $('restart').click(function(){
    grid = [
        ['\xa0', '\xa0', '\xa0'],
        ['\xa0', '\xa0', '\xa0'],
        ['\xa0', '\xa0', '\xa0']
      ];

  $('td[data-i=' + i + '][data-j=' + j + ']').html('\xa0');
  });


});