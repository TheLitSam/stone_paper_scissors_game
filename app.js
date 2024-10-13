let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const rIdx = Math.floor(Math.random()*3);
    return options[rIdx];
}

const gameDraw = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#96cdff";
}

const showWinner = (isUserWon, userChoice, compChoice) => {
    if(isUserWon) {
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        cScore.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    }
}

const playGame = (userChoice, compChoice) => {
    if(userChoice === compChoice) {
        gameDraw();
    } else {
        isUserWon = true;
        if(userChoice === "stone") {
            // compChoice = paper, scissors
            isUserWon = compChoice === "paper"? false:true;
        } else if(userChoice === "paper") {
            // compChoice = stone, scissors
            isUserWon = compChoice === "scissors"? false: true;
        } else {
            // compChoice = stone, paper
            isUserWon = compChoice === "stone"? false: true;
        }
        showWinner(isUserWon, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("userChoice = ", userChoice);
        const compChoice = genCompChoice();
        // console.log("compChoice = ", compChoice)
        playGame(userChoice, compChoice);
    })
})