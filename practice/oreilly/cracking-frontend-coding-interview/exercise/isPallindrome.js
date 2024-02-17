/* Given a string write a function which tell if
the given string is pallindrome or not.


isPallindrome('aba') -> true
isPallindrome('ababA') -> true
isPallindrome('abc') -> false

*/
let reverse = (str) => str.split("").reverse().join("").toLowerCase();

let isPalindrome = (str) => {
  return str.toLowerCase() === reverse(str);
};

console.log(isPalindrome("aba"));
console.log(isPalindrome("ababA"));
console.log(isPalindrome("abc"));
