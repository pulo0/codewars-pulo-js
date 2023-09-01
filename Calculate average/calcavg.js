/*
    DESCRIPTION:
    Write a function which calculates the average of the numbers in a given list.

    Note: Empty arrays should return 0.

    Tags: ARRAYS, FUNDAMENTALS
*/

function findAverage(array) {
    if(array.length != 0) {
      let avg = 0;
      for (let i = 0; i < array.length; i++) {
        avg += Number(array[i]);
      }
      return Number(avg / array.length);
    }
    return 0;
}