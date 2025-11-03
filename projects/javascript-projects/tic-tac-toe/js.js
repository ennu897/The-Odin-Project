let clickCount = 0;
let gameActive = false;
const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const playerInputs = [playerOne, playerTwo];
const playerAssignmentOne = document.querySelector("#player-assignment-one");
const playerAssignmentTwo = document.querySelector("#player-assignment-two");
const playerAssignmentMessageOne = document.querySelector('#player-assignment-message-one');
const playerAssignmentMessageTwo = document.querySelector('#player-assignment-message-two');
const displayFlexInner = document.querySelector('.display-flex-inner');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const restartMsg = document.querySelector('#restart-msg');
const boxes = document.querySelectorAll('.boxes');
const congratulations = document.querySelector('#congrats');

let finalWinner;
start.disabled = true;

playerAssignmentMessageOne.innerHTML = 'Enter Player names & click Start to begin!';

// Enable Start when both names are filled
playerInputs.forEach(input => {
  input.addEventListener('input', () => {
    start.disabled = !(playerOne.value.trim() && playerTwo.value.trim());
  });
});

// Winning combinations
const winningCombo = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Check winner
function winner() {
  const values = Array.from(boxes).map(a => a.value);
  for (const [a, b, c] of winningCombo) {
    if (values[a] && values[a] === values[b] && values[a] === values[c]) {
      finalWinner = values[a] === 'X'
        ? playerOne.value.trim().toUpperCase()
        : playerTwo.value.trim().toUpperCase();

      // Display winner
      playerAssignmentMessageOne.innerHTML = `${finalWinner} is winner`;
      playerAssignmentMessageTwo.style.display = "flex";
      playerAssignmentMessageTwo.innerHTML = "Congratulations!!!";
      
      congratulations.style.display = 'block';
      setTimeout(() => congratulations.style.opacity = 1, 10);
      setTimeout(() => {
        congratulations.style.opacity = 0;
        setTimeout(() => congratulations.style.display = 'none', 500);
      }, 1000);

      endGame();
      return true;
    }
  }
  return false;
}

// End game function
function endGame() {
  gameActive = false;
  boxes.forEach(box => box.disabled = true);
  playerInputs.forEach(input => input.disabled = true);
  start.disabled = true;
  restartMsg.style.backgroundColor = 'red';
  restartMsg.innerHTML = "You must Restart the game to play again.";
}

// Start button logic
start.addEventListener('click', () => {
  displayFlexInner.style.display = "flex";
  playerAssignmentMessageOne.innerHTML = 'Game started!';
  
  playerAssignmentOne.innerHTML = `${playerOne.value.trim().toUpperCase()} is assigned: X`;
  playerAssignmentTwo.innerHTML = `${playerTwo.value.trim().toUpperCase()} is assigned: O`;
  
  playerInputs.forEach(input => input.disabled = true);
  boxes.forEach(box => { box.disabled = false; box.value = ''; });

  gameActive = true;
  clickCount = 0;
  restartMsg.innerHTML = '';
  restartMsg.style.backgroundColor = 'transparent';
});

// Click event (only one listener)
document.querySelector('.grid-three-col').addEventListener('click', (e) => {
  if (!gameActive || !e.target.classList.contains('boxes')) return;
  if (e.target.value) return;

  clickCount++;
  e.target.value = clickCount % 2 === 0 ? 'O' : 'X';

  if (clickCount >= 5 && winner()) return;

  if (clickCount === 9) {
    playerAssignmentMessageOne.innerHTML = 'Game Draw!';
    restartMsg.style.backgroundColor = 'red';
    restartMsg.innerHTML = 'You must Restart the game to play again.';
    endGame();
  }
});

// Restart button
restart.addEventListener('click', () => {
  clickCount = 0;
  boxes.forEach(box => {
    box.value = '';
    box.disabled = true;
  });
  playerInputs.forEach(input => input.disabled = false);
  restartMsg.innerHTML = '';
  playerOne.value = '';
  playerTwo.value = '';
  playerAssignmentOne.innerHTML = '';
  playerAssignmentTwo.innerHTML = '';
  playerAssignmentMessageOne.innerHTML = 'Enter Player names & click Start to begin!';
  playerAssignmentMessageTwo.innerHTML = '';
  restartMsg.style.backgroundColor = 'transparent';
  gameActive = false;
  start.disabled = true;
});








// My Version of the Game - Anosh.K

/* let clickCount = 0;
let   gameActive = false;
const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const playerInputs = [playerOne, playerTwo];
const playerAssignmentOne = document.querySelector("#player-assignment-one");
const playerAssignmentTwo = document.querySelector("#player-assignment-two");
const playerAssignmentMessageOne = document.querySelector('#player-assignment-message-one');
const playerAssignmentMessageTwo = document.querySelector('#player-assignment-message-two');
const displayFlexInner = document.querySelector('.display-flex-inner');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const restartMsg = document.querySelector('#restart-msg')
const boxes = document.querySelectorAll('.boxes');
const congratulations = document.querySelector('#congrats');

let finalWinner;
start.disabled = true;

playerAssignmentMessageOne.innerHTML = 'Enter Player names & click Start to begin!';

playerInputs.forEach(input => {
  input.addEventListener('input', () => {
    start.disabled = !((playerOne.value.trim() && playerTwo.value.trim()));
  });
});

const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function winner(){
  const values = Array.from(boxes).map(a => a.value);
  for(const [a, b, c] of winningCombo){
    if(values[a] && values[a] === values[b] && values[a] === values[c]){
      playerAssignmentOne.innerHTML = '';
      playerAssignmentTwo.innerHTML = '';
      playerAssignmentMessageOne.innerHTML = '';
      finalWinner = values[a] === 'X' ? playerOne.value.trim().toUpperCase() : playerTwo.value.trim().toUpperCase();
      playerAssignmentMessageOne.innerHTML = values[a] === 'X' 
        ? `${playerOne.value.trim().toUpperCase()} is winner` 
        : `${playerTwo.value.trim().toUpperCase()} is winner`;
      playerAssignmentMessageTwo.style.display = "flex";
      playerAssignmentMessageTwo.innerHTML = "Congratulations!!!"

      start.disabled = true;
      congratulations.style.display = 'block';
      setTimeout(() => {
        congratulations.style.opacity = 1;
      }, 10);

      setTimeout(() => {
        congratulations.style.opacity = 0;
        setTimeout(() => {
          congratulations.style.display = 'none';
        }, 500);
      }, 1000)
      
      playerInputs.forEach(input => input.disabled = true);
      restartMsg.style.backgroundColor= 'red';
      restartMsg.innerHTML = "You must Restart the game to play again.";
      playerOne.value = '';
      playerTwo.value = '';
      return;
    }
  }
  return null;
}
 
start.addEventListener('click', () => {
  displayFlexInner.style.display = "flex";
  playerAssignmentMessageOne.innerHTML = 'Game started!';
  if(playerOne.value && playerTwo.value){

    playerAssignmentOne.innerHTML = `${playerOne.value.trim().toUpperCase()} is assigned: X`;
    playerAssignmentTwo.innerHTML = `${playerTwo.value.trim().toUpperCase()} is assigned: O`;
    playerInputs.forEach(input => input.disabled = true);
    
    gameActive = true;
    boxes.forEach(box => box.disabled = false);
    

    document.querySelector('.grid-three-col').addEventListener('click', (e) => {
      playerAssignmentMessageOne.innerHTML = 'Game started!';
      
      if(!gameActive) return;
    
      if(e.target.classList.contains('boxes')){  
        
        if(e.target.value) return;
        if(clickCount >= 9) return;
      
        clickCount++;
        
        e.target.value = clickCount % 2 === 0 ? 'O' : 'X';

        if(clickCount >= 5) winner();
        if(playerAssignmentMessageOne.innerHTML === `${finalWinner} is winner`){
            boxes.forEach(box => {
            box.disabled = true;
          });
        }
        
        
        if(clickCount === 9) {
          restartMsg.style.backgroundColor= 'red';
          restartMsg.innerHTML = 'You must Restart the game to play again.';
          start.disabled = true;
        }
      }
    });
  }else if((playerOne.value || playerTwo.value)){
    playerAssignmentMessageOne.innerHTML = 'Please enter both player names and click Start!!';
    playerInputs.forEach(input => input.disabled = false);
  }
});




restart.addEventListener('click', () => {
  clickCount=0;
  boxes.forEach(box => {
    box.value='';
    box.disabled = true;
  });
  playerInputs.forEach(input => input.disabled = false);
  restartMsg.innerHTML = '';
  playerOne.value = '';
  playerTwo.value = '';
  playerAssignmentOne.innerHTML = '';
  playerAssignmentTwo.innerHTML = '';
  playerAssignmentMessageOne.innerHTML = 'Enter Player names & click Start to begin!';
  playerAssignmentMessageTwo.innerHTML = ""
  restartMsg.style.backgroundColor= 'transparent';
  gameActive = false;
  start.disabled = true;
}); */