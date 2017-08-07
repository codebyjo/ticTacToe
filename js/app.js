// Bug: If computer wins, we won't know until player clicks.
$(document).ready(function () {

    let playerToken;
    let computerToken;

    $("#xButton").click(() => {
        playerToken = "X";
        computerToken = "O";
        $("#modal-background").hide();
        placeListeners();
    });

    $("#oButton").click(() => {
        playerToken = "O";
        computerToken = "X";
        $("#modal-background").hide();
        computerTurn();
        placeListeners();
    });

    let grid = [
   ['\xa0', '\xa0', '\xa0'],
   ['\xa0', '\xa0', '\xa0'],
   ['\xa0', '\xa0', '\xa0']
 ];

    // when win then game is over,  if winningArray is reached, then stop game,
    function checkMatch() {

        //Check rows for matching tokens.
        for (var i = 0; i < 3; i++) {
            if (grid[i][0] !== '\xa0' && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
                return grid[i][0];
            }
        }

        //Check columns for matching tokens.
        for (var j = 0; j < 3; j++) {
            if (grid[0][j] !== '\xa0' && grid[0][j] === grid[1][j] && grid[0][j] === grid[2][j]) {
                return grid[0][j];
            }
        }

        //Check diagonals backward slash for matching tokens.
        if (grid[0][0] !== '\xa0' && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
            return grid[0][0];
        }

        //Check diagonal forward slash for matching tokens.
        if (grid[2][0] !== '\xa0' && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2]) {
            return grid[2][0];
        }

        return false;
    }

    //Search for empty slot and return that slot, if no slots return null.
    function checkOpenSlots() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (grid[i][j] === '\xa0') {
                    return [i, j];
                }
            }
        }

        return null;
    }

    function computerTurn() {
        let winnerToken = checkMatch();

        if (winnerToken !== false) {
            console.log('The Winner is ' + winnerToken);
        } else {
            let move = checkOpenSlots();
            if (move !== null) {
                grid[move[0]][move[1]] = computerToken;
                $('td[data-i=' + move[0] + '][data-j=' + move[1] + ']').text(computerToken);

                winnerToken = checkMatch();
                if (winnerToken !== false) {
                    console.log('The Winner is ' + winnerToken);
                }
            } else {
                console.log('The game is a tie!');
            }
        }
    }

    function placeListeners() {

        $('td').click(function () {
            let $this = $(this);
            if ($this.text() === '\xa0') {
                $this.text(playerToken);
                const i = $this.data('i');
                const j = $this.data('j');
                grid[i][j] = playerToken;

                computerTurn();

            }
        });

        $('td').hover(function () {
            let $this = $(this);
            if ($this.text() === '\xa0') {
                $this.css('background-color', '#bdc3c7');
                $this.css('cursor', 'pointer');
            }
        }, function () {
            let $this = $(this);
            $this.css('background-color', 'transparent');
            $this.css('cursor', 'default');
        });
    }


    $('#restartButton').click(function () {
        grid = [
            ['\xa0', '\xa0', '\xa0'],
            ['\xa0', '\xa0', '\xa0'],
            ['\xa0', '\xa0', '\xa0']
        ];

        $('td').text('\xa0');
    });


});
