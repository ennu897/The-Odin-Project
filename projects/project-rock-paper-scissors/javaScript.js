// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors


function getComputerChoice(){
    let random = Math.random();
    if(random < 0.33){
        return "rock";
    }else if(random < 0.66){
        return "paper";
    }else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let userInput = prompt(`input rock, paper or scissors in the below field`);
    return userInput.toLowerCase();
}

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return "Game Tied!!"; 
    }else if(
        (humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock')
    ) {
        humanScore++;
        // return ` You Won!! ${humanChoice} beats ${computerChoice}`;
        return ` You Won!! ${humanChoice} beats ${computerChoice}`;
    }else{
        computerScore++;
        // return `You Lost ${computerChoice} beats ${humanChoice}`;
        return `You Lost ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame(humanSelection){
    
    let computerSelection = getComputerChoice();
    
    display(`HumanSelection: ${humanSelection} || ComputerSelction= ${computerSelection}`);
    display(playRound(humanSelection, computerSelection)); 
    display(`humanScore: ${humanScore} || computerScore: ${computerScore}`);
    
    if(humanScore == 5 || computerScore == 5){
        if(humanScore > computerScore){
            display(`You Won at the END!`);
        }else if(humanScore < computerScore){
            display(`You Lost to the Computer at the END`);
        }else {
            display(`Game Tied!`);
        }
        disableButtons();
        showResartBtn();

    }
}
// playGame();

const div = document.querySelector('div');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const p = document.createElement('p');
let restart;

div.appendChild(btn1);
btn1.textContent = 'rock';

btn1.addEventListener('click', () => {
    return playGame('rock');
});

div.appendChild(btn2);
btn2.textContent = 'scissors';

btn2.addEventListener('click', () => {
    return playGame('scissors');
});

div.appendChild(btn3);
btn3.textContent = 'paper';

btn3.addEventListener('click', () => {
    return playGame('paper');
});

div.appendChild(p);
function display(message){
    p.innerHTML += message + "<br>"
}

function disableButtons(){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}

function restartBtn(){
    humanScore = 0;
    computerScore = 0;
    p.innerHTML = "";
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    restart.remove();
}

function showResartBtn(){
    restart = document.createElement('button');
    restart.innerHTML = "Restart Game";
    div.appendChild(restart);
    restart.addEventListener('click', restartBtn);
}




































































































































































/*

// Step 1: Setup the project structure
// console.log("Hello World!");


// Step 2: Write the logic to get the computer choice
function getComputerChoice(){
    let randonNum = Math.random();
    if(randonNum < 0.33){
        return "rock";
    }else if(randonNum < 0.66){
        return "paper";
    }else {
        return "scissors";
    }
}
// console.log(getComputerChoice());


// Step 3: Write the logic to get the human choice
/*
function getHumanChoice(){
    let userInput= prompt("Input either one of the following rock/paper/scissors : ");
    return userInput.toLowerCase();
}
// console.log(getHumanChoice());
*/


// Step 4: Declare the players score variables
/*
let humanScore = 0;
let computerScore = 0;


// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Game Tied";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ){
        humanScore++;
        return "You Won! " + humanChoice + " beats " + computerChoice;
    }else {
        computerScore++;
        return "You Lose! " + computerChoice + " beats " + humanChoice;
    }
}
/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(`Score log => YOU: ${humanScore} | Computer: ${computerScore}`);
*/


// Step 6: Write the logic to play the entire game
/*
function playGame(humanSelection){
        const computerSelection = getComputerChoice();

        display(`computerChoice: ${computerSelection} | humanChoice: ${humanSelection}`);
        display(playRound(humanSelection, computerSelection));
        display(`Score log => You: ${humanScore} | Computer: ${computerScore}`);
        display("--------------------------------------------");

        if(humanScore == 5 || computerScore == 5){
            if(humanScore > computerScore){
                display("🎉 You won the game!"); 
            }else if(humanScore < computerScore){
                display("🎉 You lose the game!");
            }else {
                display("🎉 game tied!");
            }
            disableButtons();
            showRestartBtn();
        }
    }
  

// playGame();

const div = document.querySelector('div');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const result = document.createElement('p');
let restartBtn;



function display(message){
    result.innerHTML += message + "<br>";
}

function restartButton(){ 
    humanScore = 0;
    computerScore = 0;
    result.innerHTML = "";
    btn1.disabled  = false;
    btn2.disabled  = false;
    btn3.disabled  = false;
    restartBtn.remove();

    
}

function showRestartBtn(){
    restartBtn = document.createElement('button');
    restartBtn.textContent = "🔄 Restart Game";
    div.appendChild(restartBtn);
    restartBtn.addEventListener('click', restartButton);
   
}

function disableButtons(){
    btn1.disabled  = true;
    btn2.disabled  = true;
    btn3.disabled  = true;

}

div.appendChild(btn1);
btn1.textContent = "rock";
btn1.addEventListener('click', () => {
    return playGame(btn1.textContent);

});

div.appendChild(btn2);
btn2.textContent = "scissors";
btn2.addEventListener('click', () => {
    return playGame(btn2.textContent);

});

div.appendChild(btn3);
btn3.textContent = "paper";
btn3.addEventListener('click', () => {
    return playGame(btn3.textContent);
});

div.appendChild(result)

*/

/*
✅ How it works:
	•	Each player secretly chooses one of three options:
	•	Rock ✊
	•	Paper ✋
	•	Scissors ✌️
	•	Both players reveal their choice at the same time.

✅ Rules (who wins):
	•	Rock beats Scissors (rock crushes scissors).
	•	Scissors beats Paper (scissors cut paper).
	•	Paper beats Rock (paper covers rock).
	•	If both choose the same, it’s a tie.

Example outcomes:
	•	Player A: Rock ✊, Player B: Scissors ✌️ → Rock wins.
	•	Player A: Paper ✋, Player B: Rock ✊ → Paper wins.
	•	Player A: Scissors ✌️, Player B: Scissors ✌️ → Tie.
*/
