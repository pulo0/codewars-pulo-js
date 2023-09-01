/*
    DESCRIPTION:
    Write a function that accepts an integer n and a string s as parameters, 
    and returns a string of s repeated exactly n times.

    Examples (input -> output)
    6, "I"     -> "IIIIII"
    5, "Hello" -> "HelloHelloHelloHelloHello"

    Tags: STRINGS, FUNDAMENTALS
*/

//First Solution

function repeatStr (n, s) {
    return s.repeat(n);
}

//Second Solution (better one)

const repeatStr = (n,s) => s.repeat(n);