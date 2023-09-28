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
    }

    addButtons();

    function addScoreText() {
        const scoreContainer = document.createElement("div");
        parent.appendChild(scoreContainer);
        scoreContainer.classList.add("score-container");
        
        const playerScore = document.createElement("p");
        playerScore.textContent = "PLAYER SCORE:"
    
        const computerScore = document.createElement("p");
        computerScore.textContent = "COMPUTER SCORE:"
    
        scoreContainer.append(playerScore, computerScore);
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