const palindromes = function (string) {
    let updatedString = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let reverseString = "";
    for(let i=updatedString.length-1; i>=0; i--){
        reverseString += updatedString.charAt(i);
    }
    return reverseString == updatedString;
};

// Do not edit below this line
module.exports = palindromes;
