/*
    DESCRIPTION:
    Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

    Tags: FUNDAMENTALS
*/

function problem(x){
    let equation = x * 50 + 6;
    return typeof x == 'string' ? 'Error' : equation;
}