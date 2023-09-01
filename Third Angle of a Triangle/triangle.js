/*
    DESCRIPTION:
    You are given two interior angles (in degrees) of a triangle.

    Write a function to return the 3rd.

    Note: only positive integers will be tested.

    https://en.wikipedia.org/wiki/Triangle

    Tags: FUNDAMENTALS
*/

//First Solution

function otherAngle(a, b) {
    return 180 - a - b;
}

//Second Solution (better one)

function otherAngle(a, b) {
    return 180-(a+b);
  }