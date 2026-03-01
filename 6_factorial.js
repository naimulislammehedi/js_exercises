/*
// Factorial
A factorial is the product of a positive integer (
) multiplied by all smaller positive integers down to 1, denoted by an exclamation mark (
). For example
. It represents the number of ways to arrange distinct items, with 
 defined as 
*/

function factorial(n) {
    let result = 1; 
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result; 
}

console.log(factorial(5)); 