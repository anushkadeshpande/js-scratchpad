## Closures:

A function together with its lexical scope (i.e it's own lexical environment + it's parents lexical environment + its grandparents lexical environment + ....) is called closure.

Whenever functions are returned from another function, actually it's closure is returned, and it still remembers its lexical scope (the parents environment is not garbage collected).

Consider this example:
```js
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
```

When the innermost function `y` is invoked, we can observe the following closures that it has formed with x and z:
![image](https://github.com/anushkadeshpande/js-scratchpad/assets/53345232/e5daf428-30a0-48cf-b8f7-56b0dadc0934)



#### Uses of closures:
- Module design pattern
- Currying
- Functions like once
- Memoization
- Maintaining state in async world
- setTimeout
- Iterators
