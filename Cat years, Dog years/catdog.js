/* 
    DESCRIPTION:

    Kata Task
    I have a cat and a dog.

    I got them at the same time as kitten/puppy. That was humanYears years ago.

    Return their respective ages now as [humanYears,catYears,dogYears]

    NOTES:

    humanYears >= 1
    humanYears are whole numbers only
    Cat Years
    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that
    Dog Years
    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
    References

    http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
    http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
    If you liked this Kata there is another related one here

    Tags: FUNDAMENTALS
*/

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  const firstYear = 15;
  const secondYear = 9;
  const eachYearCat = 4;
  const eachYearDog = 5;
  const sum = firstYear + secondYear;
  
  switch(humanYears) {
      case 1:
        catYears = firstYear;
        dogYears = firstYear;
        break;
      case 2:
        catYears = firstYear + secondYear;
        dogYears = firstYear + secondYear;
        break;
      default:
        catYears = sum + (humanYears - 2) * eachYearCat;
        dogYears = sum + (humanYears - 2) * eachYearDog;
        break;
  }
  return [humanYears,catYears,dogYears];
}