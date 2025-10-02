const removeFromArray = function(arr, ...values) {
    for(let i=0; i<arr.length; i++){
        if(values.includes(arr[i])){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
