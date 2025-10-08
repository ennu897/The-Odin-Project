let mainResult = document.querySelector(".main-result");
function display(message){
    mainResult.innerHTML = message;
}

//  functions for operations

// Addition
function addition(a, b){
    return a+b;
}

// Subtraction
function subtract(a, b){
    return a-b;
}

// Percentage
function percentile(a, b){
    return a%b;
}

// Multiplication
function multiply(a, b){
    return a*b;
}

// Divison
function divide(a, b){
    return a/b;
}


// query boxAC box
const boxAC = document.querySelector('#boxAC');
boxAC.addEventListener('click', () =>{
    display("AC");
});

// query box-divide box
const boxDivide = document.querySelector('#box-divide');
boxDivide.addEventListener('click', () =>{
    display("/");
});

// query box-multiply box
const boxMultiply = document.querySelector('#box-multiply');
boxMultiply.addEventListener('click', () =>{
    display("*");
});

// query box-percentile box
const boxPercentile = document.querySelector('#box-percentile');
boxPercentile.addEventListener('click', () =>{
    display("%");
});

// query box-subtract box
const boxSubtract = document.querySelector('#box-subtract');
boxSubtract.addEventListener('click', () =>{
    display("-");
});

// query box-addition box
const boxAddition = document.querySelector('#box-addition');
boxAddition.addEventListener('click', () =>{
    display(addition(12, 13));
});

// query box-enter box
const boxEnter = document.querySelector('#box-enter');
boxEnter.addEventListener('click', () =>{
    display("enter");
});

// query box-zero box
const boxZero = document.querySelector('#box-zero');
boxZero.addEventListener('click', () =>{
    display("0");
});

// query box-dot box
const boxDot = document.querySelector('#box-dot');
boxDot.addEventListener('click', () =>{
    display(".");
});

// query box1 box
const box1 = document.querySelector('#box1');
box1.addEventListener('click', () =>{
    display("1");
});

// query box2 box
const box2 = document.querySelector('#box2');
box2.addEventListener('click', () =>{
    display("2");
});

// query box3 box
const box3 = document.querySelector('#box3');
box3.addEventListener('click', () =>{
    display("3");
});

// query box4 box
const box4 = document.querySelector('#box4');
box4.addEventListener('click', () =>{
    display("4");
});

// query box5 box
const box5 = document.querySelector('#box5');
box5.addEventListener('click', () =>{
    display("5");
});

// query box6 box
const box6 = document.querySelector('#box6');
box6.addEventListener('click', () =>{
    display("6");
});

// query box7 box
const box7 = document.querySelector('#box7');
box7.addEventListener('click', () =>{
    display("7");
});

// query box8 box
const box8 = document.querySelector('#box8');
box8.addEventListener('click', () =>{
    display("8");
});

// query box9 box
const box9 = document.querySelector('#box9');
box9.addEventListener('click', () =>{
    display("9");
});

