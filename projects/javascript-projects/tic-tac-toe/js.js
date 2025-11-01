let clickCount = 0;
let   gameActive = false;
const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const playerAssignmentOne = document.querySelector("#player-assignment-one");
const playerAssignmentTwo = document.querySelector("#player-assignment-two");
const playerAssignmentMessage = document.querySelector('#player-assignment-message');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const restartMsg = document.querySelector('#restart-msg')
const boxes = document.querySelectorAll('.boxes');
let finalWinner;

boxes.forEach(box => box.disabled = true);
playerAssignmentMessage.innerHTML = 'Enter Player names & click Start to begin!';

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
      
      playerAssignmentOne.innerHTML = 'Congratulations!!!';
      playerAssignmentTwo.innerHTML = '';
      playerAssignmentMessage.innerHTML = '';
      finalWinner = values[a] === 'X' ? playerOne.value.toUpperCase() : playerTwo.value.toUpperCase();
      playerAssignmentMessage.innerHTML = values[a] === 'X' ? `${playerOne.value.toUpperCase()} is winner`: `${playerOne.value.toUpperCase()} is winner`;
      restartMsg.innerHTML = 'You must Restart the game to play again.';
      playerOne.value = '';
      playerTwo.value = '';
      return;
    }
  }
  return null;
}

start.addEventListener('click', () => {
  
  if(playerOne.value && playerTwo.value){
    playerAssignmentOne.innerHTML = `${playerOne.value} is assigned: X`;
    playerAssignmentTwo.innerHTML = `${playerTwo.value} is assigned: O`;
    playerAssignmentMessage.innerHTML = 'Game started!';
    gameActive = true;
    boxes.forEach(box => box.disabled = false);

    document.querySelector('.grid-three-col').addEventListener('click', (e) => {
      if(!gameActive) return;
    
      if(e.target.classList.contains('boxes')){  
        
        if(e.target.value) return;
        if(clickCount >= 9) return;
      
        clickCount++;
        e.target.value = clickCount % 2 === 0 ? 'O' : 'X';

        if(clickCount >= 5) winner();
        if(playerAssignmentMessage.innerHTML === `${finalWinner} is winner`){
            boxes.forEach(box => {
            box.disabled = true;
          });
        }
        
        
        if(clickCount === 9) {
          restartMsg.style.backgroundColor= 'white';
          restartMsg.innerHTML = 'You must Restart the game to play again.';
        }
      }
    });
  }else if(playerOne.value || playerTwo.value){
    playerAssignmentMessage.innerHTML = 'Please enter both player names to Begin!';
  }
});


restart.addEventListener('click', () => {
  clickCount=0;
  boxes.forEach(box => {
    box.value='';
    box.disabled = false;
  });
  restartMsg.innerHTML = '';
  playerOne.value = '';
  playerTwo.value = '';
  playerAssignmentOne.innerHTML = '';
  playerAssignmentTwo.innerHTML = '';
  playerAssignmentMessage.innerHTML = 'Enter Player names & click Start to begin!';
  restartMsg.style.backgroundColor= 'transparent';
  gameActive = false;
});