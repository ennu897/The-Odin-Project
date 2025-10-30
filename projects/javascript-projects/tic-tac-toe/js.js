


let clickCount = 0;
const restartMsg = document.querySelector('#restart-msg')
const boxes = document.querySelectorAll('.boxes');

document.querySelector('.grid-three-col').addEventListener('click', (e) => {
  
  if(e.target.classList.contains('boxes')){
    if(e.target.value) return;
    if(clickCount >= 9) return;
    
    clickCount++;
    e.target.value = clickCount % 2 === 0 ? 'O' : 'X';
    console.log(clickCount);
    if(clickCount === 9) {
      restartMsg.innerHTML = 'You must Restart or Start the game to play again.';
    }
  }
});

document.querySelectorAll('.reset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    clickCount=0;
    boxes.forEach(box => {
      box.value='';
      box.disabled = false;
    });
    restartMsg.innerHTML = '';
    console.log(clickCount);
  });
});