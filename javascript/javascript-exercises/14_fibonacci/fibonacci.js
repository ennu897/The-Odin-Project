const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    if(n == 0) return 0;
    if(n == 1 || n == 2) return 1;
    let fib;
    let a = 1, b=1;
    for(let i=3; i<=n; i++){
        fib = a+b;
        a = b; 
        b = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
