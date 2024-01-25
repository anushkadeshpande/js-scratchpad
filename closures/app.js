function x() {
  var a = 7

  function y() {
    console.log(a)
  }

  return y
}

var z = x()
console.log(z)


/// ..... 


z()       // this will print 7

// Whenever functions are returned from another function, they still remember their lexical scope
// hence even though x was done executing and y was returned, and later executed, it correctly printed out the value of a

// When y was returned, actually the function was not returned, a closure was returned (fn + lexical scope)