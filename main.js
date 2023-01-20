const CHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt('What would you like to use?').toLowerCase();
    return playerChoice;
}

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let winner;

    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        winner = 'You lose! Paper beats Rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        winner = 'Tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        winner = 'You win! Rock defeats Scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        winner = 'You win! Paper beats Rock.';
    } else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        winner = 'Tie!';
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        winner = 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        winner = 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        winner = 'You win! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        winner = 'Tie!';
    }
    return winner;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

game();
