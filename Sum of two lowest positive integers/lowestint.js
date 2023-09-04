/*
    DESCRIPTION:
    Create a function that returns the sum of the two lowest 
    positive numbers given an array of minimum 4 positive integers. 
    No floats or non-positive integers will be passed.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

    [10, 343445353, 3453445, 3453545353453] should return 3453455.

    Tags: ARRAYS, FUNDAMENTALS
*/

//First Solution

function sumTwoSmallestNumbers(numbers) {  
    const compareNums = (a, b) => a - b;
    numbers = numbers.sort(compareNums);
    return Number(numbers[0]) + Number(numbers[1]);
}

//Second Solution (tweeked)

function sumTwoSmallestNumbers(numbers) {  
    const compareNums = (a, b) => a - b;
    numbers = numbers.sort(compareNums);
    return numbers[0] + numbers[1];
}