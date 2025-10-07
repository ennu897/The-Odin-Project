const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, data) => total + data, 0);
};

const multiply = function(arr) {
  let power;
	return arr.reduce((total, data) => total * data, 1);
};

const power = function(a, b) {
  let power=1;
	for(let i=1; i<=b; i++){
    power = power*a;
  }
  return power;
};

const factorial = function(number) {
	let fac = 1; 
  for(let i=1; i<=number; i++){
    fac = i*fac;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
