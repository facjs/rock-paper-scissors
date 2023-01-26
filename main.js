const choices = document.querySelectorAll('img');
const computerScore = document.getElementById('pc-score');
const playerScore = document.getElementById('user-score');
const resetButton = document.getElementById('reset');
const resultDisplay = document.querySelector('.result');

let playerSelection;
let computerSelection;

let playerCount = 0;
let computerCount = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerSelection = choices[randomNumber].id;
    return computerSelection;
};

resetButton.addEventListener('click', () => {
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    resultDisplay.textContent = '...';
});

choices.forEach((choice) => {
    choice.addEventListener('click', (evt) => {
        getComputerChoice();
        playerSelection = evt.target.id;
        getResults();
    });
});

const getResults = () => {
    switch (playerSelection + computerSelection) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.textContent = `You selected ${playerSelection} and Computer selected ${computerSelection}.\n You win!`;
            playerCount++;
            break;

        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.textContent = `You selected ${playerSelection} and Computer selected ${computerSelection}.\n You lose!`;
            computerCount++;
            break;

        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            resultDisplay.textContent = `You selected ${playerSelection} and Computer selected ${computerSelection}.\n It's a tie!`;
    }

    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;
};
