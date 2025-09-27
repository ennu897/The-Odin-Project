// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

const result = document.getElementById('my-heading');

function display(message){
    result.innerHTML += "<br>" + message;
}

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
function getHumanChoice(){
    let userInput= prompt("Input either one of the following rock/paper/scissors : ");
    return userInput.toLowerCase();
}
// console.log(getHumanChoice());


// Step 4: Declare the players score variables
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
function playGame(){
    for(let i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        display(`Round: ${i}`);
        display(`computerChoice: ${computerSelection} | humanChoice: ${humanSelection}`);
        display(playRound(humanSelection, computerSelection));
        display(`Score log => You: ${humanScore} | Computer: ${computerScore}`);
        display("--------------------------------------------");

    }
    if(humanScore > computerScore){
        display("🎉 You won the game!"); 
    }else if(humanScore < computerScore){
        display("🎉 You lose the game!");
    }else {
        display("🎉 game tied!");
    }
}
playGame();

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