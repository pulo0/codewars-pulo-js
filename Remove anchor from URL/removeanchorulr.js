/*
    DESCRIPTION:
    Complete the function/method so that it returns the url with anything after the anchor (#) removed.

    Examples
    "www.codewars.com#about" --> "www.codewars.com"
    "www.codewars.com?page=1" -->"www.codewars.com?page=1"

    Tags: REGULAR EXPRESSIONS, STRINGS, FUNDAMENTALS
*/

function removeUrlAnchor(url){
    return url.replace(/([#])\w+/g,'')
}