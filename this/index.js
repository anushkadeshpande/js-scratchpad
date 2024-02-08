// this works differently in strict mode and non-strict mode
"use strict"

// 1.  this in global space
console.log(this);
// ==> window / global object


// 2. this in function

(function x() {
  console.log(this)
})()

// ==> undefined in strict mode
// ==> window / global object in non-strict mode

// this in non-strict mode =======> this substitution
// if this is undefined/null, then this will be replaced with global object 