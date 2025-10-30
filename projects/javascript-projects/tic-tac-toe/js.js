document.querySelector('#one-1').addEventListener('click', (e) => {
  console.log(e);
})


document.querySelector('.grid-three-col').addEventListener('click', (e) => {
  if(e.target.classList.contains('boxes')){
    let random = Math.random();
    const message = random <= 0.5 ? 'X' : "O";
    e.target.value = message;
  }
});