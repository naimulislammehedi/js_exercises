/*
// Palindrome
A palindrome is a word, phrase, name, or number that reads the same forward or backward (e.g., madam, noon, 1001). They occur more commonly than you might think and appear in names, dates, places, and other everyday language uses.
*/
function isPalindrom(str) {
    return str === str.split("").reverse().join(""); 
}

console.log(isPalindrom("noon")); 