function x() {
  var a = 7

  function y() {
    console.log(a)
  }

  a = 100 

  return y
}

var z = x()
console.log(z)

z()    // will print 100 instead of 7

// Why??
/*
* When y was returned, it's lexical scope was returned
* Hence, the reference to `a` was returned (not the value of `a`)
* Now, when x was gone, a was not garbage collected and is persisted due to closure and hence 100 was printed
*/