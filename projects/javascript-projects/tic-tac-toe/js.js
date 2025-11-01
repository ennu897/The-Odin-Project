let clickCount = 0;
let   gameActive = false;
const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const playerInputs = [playerOne, playerTwo];
const playerAssignmentOne = document.querySelector("#player-assignment-one");
const playerAssignmentTwo = document.querySelector("#player-assignment-two");
const playerAssignmentMessage = document.querySelector('#player-assignment-message');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const restartMsg = document.querySelector('#restart-msg')
const boxes = document.querySelectorAll('.boxes');
const congratulations = document.querySelector('#congrats');

let finalWinner;


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
      playerAssignmentMessage.innerHTML = values[a] === 'X' 
        ? `${playerOne.value.toUpperCase()} is winner` 
        : `${playerOne.value.toUpperCase()} is winner`;
      
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

document.querySelector('.grid-three-col').addEventListener('click', () => {
  if(playerOne.value && playerTwo.value){
    playerAssignmentMessage.innerHTML = 'Please click Start to Begin!!';
  }
});


document.querySelector('.grid-three-col').addEventListener('click', () => {
  if((!playerOne.value || !playerTwo.value)){
    playerAssignmentMessage.innerHTML = 'Please enter both player names and click Start!!';
  }
});

  
start.addEventListener('click', () => {
playerAssignmentMessage.innerHTML = 'Game started!';
  if(playerOne.value && playerTwo.value){

    playerAssignmentOne.innerHTML = `${playerOne.value} is assigned: X`;
    playerAssignmentTwo.innerHTML = `${playerTwo.value} is assigned: O`;
    playerInputs.forEach(input => input.disabled = true);
    
    gameActive = true;
    boxes.forEach(box => box.disabled = false);
    

    document.querySelector('.grid-three-col').addEventListener('click', (e) => {
      playerAssignmentMessage.innerHTML = 'Game started!';
      
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
          restartMsg.style.backgroundColor= 'red';
          restartMsg.innerHTML = 'You must Restart the game to play again.';
        }
      }
    });
  }else if((playerOne.value || playerTwo.value)){
    playerAssignmentMessage.innerHTML = 'Please enter both player names and click Start!!';
    playerInputs.forEach(input => input.disabled = false);
  }
});




restart.addEventListener('click', () => {
  clickCount=0;
  boxes.forEach(box => {
    box.value='';
    box.disabled = false;
    box.autocomplete = 'off';
  });
  playerInputs.forEach(input => input.disabled = false);
  restartMsg.innerHTML = '';
  playerOne.value = '';
  playerTwo.value = '';
  playerAssignmentOne.innerHTML = '';
  playerAssignmentTwo.innerHTML = '';
  playerAssignmentMessage.innerHTML = 'Enter Player names & click Start to begin!';
  restartMsg.style.backgroundColor= 'transparent';
  gameActive = false;
});