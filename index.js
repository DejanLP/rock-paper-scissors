
function computerPlay () {
    let random = parseInt(Math.random() * 100);

    if(random < 33) {
        return 'paper';
    }
    else if (random < 66) {
        return 'rock';
    }
    else {
        return 'scissors';
    }
}

function playRPS (playerSelection, computerSelection) {
    const playerSelectionFormatted = playerSelection.toLowerCase();

    if (playerSelectionFormatted == 'rock') {
        if (computerSelection == 'rock') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            return 'noWinner';
        }
        else if (computerSelection == 'paper') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            return 'compWins';
        }
        console.log(playerSelection + ' vs. ' + computerSelection);
        return 'playerWins';

    }
    else if (playerSelectionFormatted == 'paper') {
        if (computerSelection == 'rock') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            return 'playerWins';
        }
        else if (computerSelection == 'paper') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            return 'noWinner';
        }
        console.log(playerSelection + ' vs. ' + computerSelection);
        return 'compWins';

    }
    else if (playerSelectionFormatted == 'scissors'){
        if (computerSelection == 'rock') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            return 'compWins';
        }
        else if (computerSelection == 'paper') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            return 'playerWins';
        }
        console.log(playerSelection + ' vs. ' + computerSelection);
        return 'noWinner';
    }
    else {
        return 'Please enter rock, paper or scissors to play!'
    }
}

function playGame() {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 1; i<=5; i++) {
        const playerInput = prompt('Enter your choice');
        const computerInput = computerPlay();

        const round = playRPS(playerInput, computerInput);
        if(round == 'playerWins') {
            playerCount += 1;
            console.log(`You win! New score: ${playerCount}:${computerCount}!`);
        }
        else if (round == 'compWins') {
            computerCount += 1;
            console.log(`Computer wins! New score: ${playerCount}:${computerCount}!`);
        }
        else {
            console.log(`No winner! Score stays ${playerCount}:${computerCount}!`);
        }
        if(playerCount == 3 || computerCount == 3) {
            if(playerCount == 3) {
                console.log(`Best of 3 is over! You win with the score ${playerCount}:${computerCount}!`);
            }
            console.log(`Best of 3 is over! Computer wins with the score ${playerCount}:${computerCount}!`);
            break;
        }
    }
}