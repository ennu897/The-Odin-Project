let mainResult = document.querySelector(".main-result");
function displayPrimary(message){
    mainResult.innerHTML = message;
}

let displayValues = document.querySelector(".display-values");
function displaySecondary(message){
    displayValues.innerHTML = message;
}

let a =[];

document.querySelector('.main-grid').addEventListener('click', (event) => {
    const box = event.target.closest('.box');
    if(!box) return;

    const span = box.querySelector('span'); 
    if(!span) return;

    if (box.id === "box-enter") return;
    if(box.id === "boxAC") {
        a=[];
        console.log("");
        displayPrimary("");
        displaySecondary("");
        return;
    }

    const value = span.textContent.trim();

    if(/\d/.test(value)){
        if(a.length === 0 || isNaN(a[a.length-1])){
            a.push(value);
        }else{
            a[a.length-1] += value;
        }
    }else{
        a.push(value);
    }

    displaySecondary(a.join(' '));

});

const boxEnter = document.querySelector('#box-enter');
    boxEnter.addEventListener('click', () =>{
        let firstVariable = Number(a[0]);
        let operatorVariable = a[1];
        let secondVariable = Number(a[2]);
        displaySecondary(`${firstVariable} ${operatorVariable} ${secondVariable}`)
        displayPrimary(operate(firstVariable, operatorVariable, secondVariable));
        a=[];
});


// Main Operator funciton
function operate(first, operator, second){
    switch (operator){
        case "/":
            return divide(first, second);
        case "x":
            return multiply(first, second);
        case "%":
            return percentile(first, second);
        case "-":
            return subtract(first, second);
        case "+":
            return addition(first, second);
        case "":
            return null; 
        default:
            return "Invalid Operator";
    }
    
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




// Main Operator funciton
/*
function operate(firstVariable, secondVariable, thirdOperator){
  switch (thirdOperator){
    case "boxDivide":
        return divide(firstVariable, secondVariable);
    case "boxMultiply":
        return multiply(firstVariable, secondVariable);
    case "boxPercentile":
        return percentile(firstVariable, secondVariable);
    case "boxSubtract":
        return subtract(firstVariable, secondVariable);
    case "boxAddition":
        return addition(firstVariable, secondVariable);
    case "":
        return null; 
    default:
        return "Invalid Operator";
 }
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

























// query box-enter box
/*


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
boxMultiply.addEventListener('click', (event) =>{
    // display("X");
    console.log("X")
    console.log(event);
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

*/