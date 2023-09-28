let playerScore = 0;
let computerScore = 0;
        
function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound (playerSelection, computerSelection) {
    let invalidPlayerSelection =
    playerSelection !== "rock" ||
    playerSelection !== "paper" ||
    playerSelection !== "scissors";

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats scissors. You won!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper beats rock. You lost!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats rock. You won!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors beats paper. You lost!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats paper. You won!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats scissors. You lost!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === null) {
        return;
    } else if (invalidPlayerSelection) {
        return "You have to write rock, paper or scissors!";
    } 
}

function getfinalScore (playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You won the game!")
    } else if (playerScore < computerScore) {
        console.log("You lost the game!")
    } else {
        console.log("It's a tie!")
    }

    console.log(playerScore, computerScore)
}

function game() {
    const playerSelection = prompt("Let's play Rock, Paper, Scissors! Please insert 'rock', 'paper', or 'scissors' to start playing.");
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    return roundResult;
}

for (let i = 0; i < 5; i++) {
    let outcome = game(); // outcome == roundResult ^
    if (outcome === undefined) {
        break;
    }
    let playerVictory = !!outcome.match(/won/); //str.match returns an array, so !! converts it to boolean; can also be written as let playerVictory = outcome.match(/won/), and then... (see below)
    let computerVictory = !!outcome.match(/lost/);
    if (playerVictory == true) {//...here you'd have playerVictory !== null;
        playerScore += 1;
    } else if (computerVictory == true) {
        computerScore += 1;
    } else if (outcome == "You have to write rock, paper or scissors!") {
        i--; // if you input anything other than 'rock', 'paper' or 'scissors', you substract 1 from the loop, so the invalid answers don't count; in other words, the loop completes only if there are 5 valid inputs
        console.log(outcome)
    }
}

getfinalScore(playerScore, computerScore);
    