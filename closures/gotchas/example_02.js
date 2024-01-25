function z() {
  var b = 100
  function x() {
    var a = 7;

    function y() {
      console.log(a, b);
    }
    console.log("In x")
    y()
  }
  console.log("In z")
  x()
}

var outermostFunction = z();


/*
 * y forms a closure with both x and z

Closure (x)
  a : 7
Closure (z)
  b : 100
 
*/
