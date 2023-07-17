/*
    Given an array of integers, return a new array with each value doubled.
    For example:
    [1, 2, 3] --> [2, 4, 6]

    Tags: FUNDAMENTALS, ARRAYS
*/ 
function maps(x){
    let newx = [];
    for(let i = 0; i < x.length; i++){
        newx.push(x[i] * 2);
    }
    return newx;
}