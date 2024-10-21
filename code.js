let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    message.innerText = "GAME WAS DRAW. PLAY AGAIN";
    message.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        message.innerText = `YOU WIN! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    }
    else {
        computerscore++;
        computerscorepara.innerText = computerscore;
        message.innerText = `YOU LOSE. ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const computerChoice = genCompChoice();

    if(userChoice === computerChoice) {
        drawGame();
    }
    
    else {                                                      //scissors, paper
        let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
      }
      
      else if(userChoice === "paper") {                         //rock, scissors
        userWin = computerChoice === "scissors" ? false : true;
      }
      
      else {                                                    //rock, paper
        userWin === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});