let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    let options = ["rock", "scissors", "paper"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "It was a draw :|";
    msg.style.backgroundColor = "black" ;

}

const showWinner = (userWin,userChoice, compChoice) => {
    if (userWin) {
        console.log("user wins");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green" ;
    }
    else {
        msg.innerText = `You lost :(  ${compChoice} beats your ${userChoice}`;
        console.log("computer wins");
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red" ;

    }
}

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true ;
        if (userChoice === "rock") {
            if (compChoice === "scissors" ) {
                userWin = true;
            }
            else {
                userWIn = false;
            }
        }
        else if (userChoice === "scissors") {
            if (compChoice === "paper"){
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        else {
            if (compChoice === "rock"){
                userWin = true;
            }
            else {
                userWin = false;
            }
        }

        showWinner(userWin, userChoice, compChoice);
    }
};
