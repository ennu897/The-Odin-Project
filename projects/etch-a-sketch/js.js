const container = document.querySelector('div');
container.setAttribute("style", "background-color: green; width: 100vw; height: 100vh; display: flex; flex-wrap: wrap;");


let userInput;
function input() {
    userInput = parseInt(prompt(`enter the no.of square you need here between 1 to 100`));
    if(userInput > 0 && userInput <=100){
        return userInput;
    }else {
        alert(`input only the integers between 1 - 100`);
        return input();
    }
}
input();

let squareSize = 100/userInput;
for(let i=0; i< userInput * userInput; i++){
    const square = document.createElement('div');
    square.setAttribute("style", `width: ${squareSize}%;  height: ${squareSize}%; border: 1px solid #ccc;`);

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "brown";
    });
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = "green";
    });

    container.appendChild(square);
}