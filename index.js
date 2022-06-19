/**
 * ============================
 * Part for game logic
 * ============================
 */
//randomly assign computer option
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

//one round of rock paper scissors and return result
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
        return 'invalid'
    }
}
//best of five and store points of each player
function playGame() {
    let playerCount = 0;
    let computerCount = 0;

    while (playerCount < 3 || computerCount < 3) {
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
        else if (round == 'invalid'){
            console.log('Please enter one of rock, paper or scissors!');
        }
        else {
            console.log(`No winner! Score stays ${playerCount}:${computerCount}!`);
        }
        if(playerCount == 3 || computerCount == 3) {
            if(playerCount == 3) {
                console.log(`Best of 5 is over! You win with the score ${playerCount}:${computerCount}!`);
                break;
            }
            console.log(`Best of 5 is over! Computer wins with the score ${playerCount}:${computerCount}!`);
            break;
        }
    }
}

/**
 * ====================================
 * Part for the UI logic
 * ====================================
 */

//listen for start button, to start the game
const start = document.querySelector('.start-btn');
start.addEventListener('click', initGame);


/**
            <button class="option rock">Rock</button>
            <button class="option paper">Paper</button>
            <button class="option scissors">Scissors</button>
 */
function initGame() {
    //new title for h1
    const h1 = document.querySelector('h1');
    h1.textContent = 'Rock, paper or scissors?';

    const start_btn = document.querySelector('.start-btn');
    start_btn.remove();
    
    //add option buttons
    const buttons = document.querySelector('.buttons');
    const rock = document.createElement('button');
    const scissors = document.createElement('button');
    const paper = document.createElement('button');

    rock.classList.add('option');
    rock.classList.add('rock');

    paper.classList.add('option');
    paper.classList.add('paper');
    paper.textContent = 'Paper';

    scissors.classList.add('option');
    scissors.classList.add('scissors');

    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);

    //playGame;
} 


//Add a subheader when hovering over a button
function hoverHeader() {
    const h2Exist = document.querySelector('h2');
    if(h2Exist == null) {
        const header = document.querySelector('.header');
        const h2 = document.createElement('h2');
        h2.textContent = 'Choose wisely!';
        h2.style.fontStyle = 'italic';
        header.appendChild(h2);
    }
}
//Listen for hover events to add the subheader if not visible
const buttons = document.querySelectorAll('.button');
buttons.forEach((btn) => {
    btn.addEventListener('mouseover', hoverHeader);
})