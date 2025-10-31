let clickCount = 0;
const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const playerAssignment = document.querySelector('#player-assignment');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const restartMsg = document.querySelector('#restart-msg')
const boxes = document.querySelectorAll('.boxes');

playerAssignment.innerHTML = 'Enter Player names & click Start to begin!';

start.addEventListener('click', () => {
  if(playerOne.value && playerTwo.value){
    playerAssignment.innerHTML = `${playerOne.value} is assigned:X ${playerTwo.value} is assigned:O`;

    document.querySelector('.grid-three-col').addEventListener('click', (e) => {
    
      if(e.target.classList.contains('boxes')){  
        if(e.target.value) return;
        if(clickCount >= 9) return;
      
        clickCount++;
        e.target.value = clickCount % 2 === 0 ? 'O' : 'X';
        if(clickCount === 9) {
          restartMsg.style.backgroundColor= 'white';
          restartMsg.innerHTML = 'You must Restart the game to play again.';
        }
      }
    });
  }else if(playerOne.value || playerTwo.value){
    playerAssignment.innerHTML = 'Please enter both player names to Begin!';
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
  playerAssignment.innerHTML = '';
});