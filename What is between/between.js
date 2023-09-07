/*
    DESCRIPTION:
    Complete the function that takes two integers (a, b, where a < b)
    and return an array of all integers between the input parameters, including them.

    For example:

    a = 1
    b = 4
    --> [1, 2, 3, 4]

    Tags: ALGORITHMS, FUNDAMENTALS
*/

//First Solution (the difficult to understand)

function between(a, b) {
  const array = (start, stop, step) =>
    Array.from(
    {length: (stop - start) / step + 1},
    (value, index) => start + index * step
    );
  return array(a, b, 1);
}

//Second Solution (the most popular one)

function between(a, b) {
  let arr = [];
  for(let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}