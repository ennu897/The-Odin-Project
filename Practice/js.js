const list = document.querySelector("ul");
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let listItem = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement('button');

    li.appendChild(span);
    span.textContent = listItem;
    li.appendChild(btn);
    btn.textContent = "Delete";
    list.appendChild(li);

    btn.addEventListener('click', () => {
        list.removeChild(li);
    });
    input.focus();
});








// modifing the DOM objects
/*
const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey I'm red!"; 
para.style.color= "red";
container.appendChild(para);

const head = document.createElement('h3');
head.textContent= "Hey I'm blue h3!"; 
head.style.color= "blue";
container.appendChild(head);

const block = document.createElement('div');
block.setAttribute("style", "border: 1px solid black; background-color: pink");

const elementH1 = document.createElement('h1');
elementH1.textContent = "I'm in a div";
block.appendChild(elementH1);

const elementP = document.createElement('p');
elementP.textContent = "ME TOO!";
block.appendChild(elementP)

container.appendChild(block);
*/


/*
// add function
function add7(number){
    return number+7;
}
console.log(add7(2));

// first letter capitalize function
function capitalize(str){
    return str.charAt(0).toUpperCase();
}
console.log(capitalize("anosh"));

// Print lastLetter
function lastLetter(str){
    for(let i=str.length-1; i<str.length;){
        return str.charAt(i);
    }    
}
console.log(lastLetter("anoshbhk"));
*/

/*
// FizzBuzz program
let answer = parseInt(prompt("Enter a number choice of your own: "));
for(let i=1; i<=answer; i++){
    if(i%3==0 & i%5==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}
*/



// // https://www.theodinproject.com/lessons/foundations-loops-and-arrays

/*
console.log("using Reduce method");
const arr = [1, 2, 3, 4, 5];

let product = arr.reduce((total, currentItem) => {
    return total*currentItem;
}, 1);
console.log(product);
console.log(arr);


console.log("");
console.log("using filter method");
    function odd(num){
        return (num%2 != 0);
    }
let fil = arr.filter(odd);
console.log(fil);
console.log(arr);


console.log("");
console.log("using filter method");
    function all(nums){
        return nums+1;
    }
let ad = arr.map(all);
console.log(ad);
console.log(arr);
*/



// all three methods combined 

/*
const arr = [1, 2, 3, 4, 5];

function sumOfTripledEvens(even){
    return (even%2 == 0);
}

let getEven = arr.filter(sumOfTripledEvens);

console.log(getEven);
console.log(arr);

let getMultiply = arr.reduce((total, currentItems) => {
    return total*currentItems;
}, 3);

console.log(getMultiply);
console.log(arr);

let getAdd = arr.map((num) => num+3);

console.log(getAdd);
console.log(arr);
*/



// https://javascript.info/array-methods#tasks

// Translate border-left-width to borderLeftWidth
/* 
function camelize(str){
    let words = str.split("-");
    let result = words[0];
    for(let i=1; i< words.length; i++){
      result += words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return result;
  }

  console.log(camelize("background-color"));
  console.log(camelize("list-style-image"));
  console.log(camelize("-webkit-transition"));

  */



//  Filter range
/*
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
    function check(num){
        return num>=a && num<=b;
    }
    return arr.filter(check);
}

let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);
*/



// filter in range 
/*
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
    function check(num){
        return num>=a && num<=b;
    }
    return arr.filter(check);
}

let filtered = filterRangeInPlace(arr, 1, 4);
arr.length=0;
arr.push(...filtered);

console.log(arr);
/*
  let arr =[5, 3, 8, 1];
  function filterRangeInPlace(arr, a, b){
    return arr.filter((num) => num>=a && num<=b);
  }
  let filtered = filterRangeInPlace(arr, 1, 4);
  arr.length=0;
  arr.unshift(...filtered);
  console.log(arr);
*/



//  sort in decreasing order
/*
let arr = [5, 2, 1, -10, 8];
function decreasingOrder(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<=arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for(let i=0; i<arr.length; i++){
        console.log(arr.join(" "));
    }
}
// console.log(decreasingOrder(arr));

arr.sort((a, b) => a-b);
console.log(arr);
*/



// Copy and sort array
/*
let arr = ["HTML", "Javascript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

function copySorted(arr){
    return arr.slice().sort();
}
*/



// Shuffle an array
/*
let arr = [1, 2, 3];

function shuffle(arr){
    return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arr));
*/



// Filter unique array members
/*
let strings = ["Hare", "Krishna", "Hare", "Krishna",
                "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(strings);
function unique(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
console.log(unique(strings));
*/




