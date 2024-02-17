// Create a function that reverses the given string

/*
    reverse("Hello World")
    output -> dlroW olleH
*/

function reverse(str) {
  return (result = str.split("").reverse().join(""));
}

console.log(reverse("Hello World"));
