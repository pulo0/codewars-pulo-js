/*
    DESCRIPTION:
    Write a function that always returns 5

    Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

    Good luck :)

    Tags: RESTRICTED, FUNDAMENTALS, PUZZLES
*/

// The easiest solution
function unusualFive() {
    return 'balls'.length;
}


//My first solution
function unusualFive() {
    let pie = Math.pow(Math.PI, Math.E);
    let arr = pie.toString().split("");
    return Number(arr[Math.ceil(Math.PI)]);
}