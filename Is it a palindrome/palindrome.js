/*
    DESCRIPTION:
    Write a function that checks if a given string (case insensitive) is a palindrome. 
    A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, 
    such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

    Tags: FUNDAMENTALS
*/

//First Solution

function isPalindrome(x) {
    x = x.toLowerCase();
    let rev = x.split("");
    rev = rev.reverse();
    rev = rev.join(""); 
    return x == rev ? true : false;
}

//Second Solution (the better one)

function isPalindrome(x) {
    x = x.toLowerCase();
    let rev = x.toLowerCase().split("").reverse().join(""); 
    return x == rev ? true : false;
}