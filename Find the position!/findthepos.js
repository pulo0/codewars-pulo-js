/*
    DESCRIPTION:
    When provided with a letter, return its position in the alphabet.

    Input :: "a"

    Ouput :: "Position of alphabet: 1"

    Tags: FUNDAMENTALS
*/

function position(letter){
    const difference = 96;
    return `Position of alphabet: ${letter.charCodeAt(0) - difference}`;
}