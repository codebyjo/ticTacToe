
//to win horizontal, match this in any row [true, true, true].
//to win vertical, must match all rows to [true, null, null], or [null, true, null], or [null, null, true]
//to win diagonal, gameArray must match this pattern: [ [true, null, null], [null, true, null], [null, null, true] ] or [ [null, null, true], [null, true, null], [true, null, null] ]
const PLAYER_TOKEN = "x"
const COMPUTER_TOKEN = "o";

 $(document).ready(function() {
      const grid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
      ];

  function isGameOver(){
      //is game over? here check rows
      for (var i = 0; i <3; i++)
        if (grid[i][0] !== " " &&
          grid[i][0] === grid[i][1] &&
          grid[i][0] === grid[i][2]) {
          return grid[i][0]
          }
        }
      

      //check column
   /*   for (var j = 0; j <3; j++)
        if (grid[0][j] !== " " &&
          grid[0][j] === grid[1][j] &&
          grid[0][j] === grid[2][j]) {
          return grid[0][j]
          }
        }
    

            //check diagonal left top to right down
        if (grid[0][0] !== " " &&
          grid[0][0] === grid[1][1] &&
          grid[0][0] === grid[2][2]) {
          return grid[0][0]
          }
        

      //check diagonal top right to bottom dow

        if (grid[2][2] !== " " &&
          grid[2][2] === grid[1][1] &&
          grid[2][2] === grid[0][0]) {
          return grid[0][2]
          }

          let empty = true;
          for (var i=0; i<3; i++) {
            for (var j = 0; j < 3; j++) {
              if (grid[i][j]=== " ") {
                return false;
              }
            }
          }
          return null;
        }

      function moveAI() {
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


  $('td').click(function(){
    $this = $(this);
    $this.html(PLAYER_TOKEN);
    const i = $this.data('i');
    const j = $this.data('j');
      grid[i][j] = PLAYER_TOKEN;
      console.log(grid);

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

 });


 