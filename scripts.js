const container = document.querySelector(".container");

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addNewChildren(parent) {
    function addText() {
        const p = document.createElement("p");
        p.innerHTML = "Start playing by choosing one of the three choices.<br>The first player to reach 5p wins the game."
        parent.appendChild(p);
    }
    
    addText();

    function addImages() {
        const imageContainer = document.createElement("div");
        parent.appendChild(imageContainer);
        imageContainer.classList.add("image-container");
    
        const rock = document.createElement("img");
        rock.src = "/images/rock.png";

        const paper = document.createElement("img");
        paper.src = "/images/paper.png";

        const scissors = document.createElement("img");
        scissors.src = "/images/scissors.png";

        imageContainer.append(rock, paper, scissors);
    }

    addImages();

    function addButtons() {
        const buttonContainer = document.createElement("div");
        parent.appendChild(buttonContainer);
        buttonContainer.classList.add("button-container");
    
        rockButton = document.createElement("button");
        rockButton.textContent = "ROCK";
        rockButton.setAttribute("id", "button1");
    
        paperButton = document.createElement("button");
        paperButton.textContent = "PAPER";
        paperButton.setAttribute("id", "button2");
    
        scissorsButton = document.createElement("button");
        scissorsButton.textContent = "SCISSORS";
        scissorsButton.setAttribute("id", "button3");
    
        buttonContainer.append(rockButton, paperButton, scissorsButton);
    
        const buttons = document.querySelectorAll("button");
        for (const button of buttons) {
            button.classList.add("rps-buttons");
        }

        rockButton.addEventListener("click", () => {
            playRound("rock");
        });

        paperButton.addEventListener("click", () => {
            playRound("paper");
        });

        scissorsButton.addEventListener("click", () => {
            playRound("scissors");
        });
    }


    addButtons();

    function addScoreText() {
        const scoreContainer = document.createElement("div");
        parent.appendChild(scoreContainer);
        scoreContainer.classList.add("score-container");
        
        const playerScore = document.createElement("p");
        playerScore.setAttribute("id", "player-score");
        playerScore.innerHTML = "PLAYER SCORE: <span id='player-score-span'>0</span>";
    
        const computerScore = document.createElement("p");
        computerScore.setAttribute("id", "computer-score");
        computerScore.innerHTML = "COMPUTER SCORE: <span id='computer-score-span'>0</span>";
    
        scoreContainer.append(playerScore, computerScore);

        const roundResultParagraph = document.createElement("p");
        roundResultParagraph.setAttribute("id", "result-text");
        parent.appendChild(roundResultParagraph);
    }

    addScoreText();
}

function removeChildrenWrapper() {
    removeAllChildren(container);
}

function addChildrenWrapper() {
    addNewChildren(container);
}

const btn = document.querySelector("#start");

btn.addEventListener("click", removeChildrenWrapper);
btn.addEventListener("click", addChildrenWrapper);
// You could also use an anonymous function instead of the wrapper

function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound (playerSelection) {

    let playerScore = document.getElementById("player-score-span");
    let computerScore = document.getElementById("computer-score-span");

    if (playerScore.innerText == 5 || computerScore.innerText ==5) {
        return;
    }

    const computerSelection = getComputerChoice();

    let roundResult;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult = "Rock beats scissors. You won!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult = "Paper beats rock. You lost!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult = "Paper beats rock. You won!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult = "Scissors beats paper. You lost!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult = "Scissors beats paper. You won!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult = "Rock beats scissors. You lost!";
    } else if (playerSelection === computerSelection) {
        roundResult = "It's a tie!";
    } else if (playerSelection === null) {
        roundResult = null;
    }

    const roundResultParagraph = document.getElementById("result-text");
    roundResultParagraph.innerHTML = (roundResult);

    let playerVictory = !!roundResult.match(/won/);
    let computerVictory = !!roundResult.match(/lost/);

    if (playerVictory == true) {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
    } else if (computerVictory == true) {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    }

    const container = document.querySelector(".container");
    const playAgainButton = document.createElement("button");
    playAgainButton.setAttribute("id", "play-again");

    function reloadPageOnClick(button, parent) {
        button.addEventListener("click", () => {
            location.reload();
        })
        parent.appendChild(button);
    }
    
    if (playerScore.innerText == 5) {
        roundResultParagraph.textContent = "Congrats! You won the game!";
        playAgainButton.textContent = "PLAY AGAIN";
        reloadPageOnClick(playAgainButton, container);
    } else if (computerScore.innerText == 5) {
        roundResultParagraph.textContent = "Seems like you've lost... Better luck next time.";
        playAgainButton.textContent = "TRY YOUR LUCK AGAIN";
        reloadPageOnClick(playAgainButton);
    }
}