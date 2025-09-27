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
console.log(getComputerChoice());

function getHumanChoice(){
    let userInput = prompt("your input should be rock or paper or scissors: ");
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "You got Tied!!!";
    }else if (
        (humanChoice === "rock" & computerChoice === "scissors") ||
        (humanChoice === "paper" & computerChoice === "rock") ||
        (humanChoice === "scissors" & computerChoice === "paper")
    ) {
        return "You Won! " + humanChoice + " beats " + computerChoice;
    }else {
        return "You Lose! " + computerChoice + " beats " + humanChoice;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// console.log(computerSelection);
console.log(humanSelection);

console.log(playRound(humanSelection, computerSelection));




// ✅ How it works:
// 	•	Each player secretly chooses one of three options:
// 	•	Rock ✊
// 	•	Paper ✋
// 	•	Scissors ✌️
// 	•	Both players reveal their choice at the same time.

// ✅ Rules (who wins):
// 	•	Rock beats Scissors (rock crushes scissors).
// 	•	Scissors beats Paper (scissors cut paper).
// 	•	Paper beats Rock (paper covers rock).
// 	•	If both choose the same, it’s a tie.

// Example outcomes:
// 	•	Player A: Rock ✊, Player B: Scissors ✌️ → Rock wins.
// 	•	Player A: Paper ✋, Player B: Rock ✊ → Paper wins.
// 	•	Player A: Scissors ✌️, Player B: Scissors ✌️ → Tie.

//     // 