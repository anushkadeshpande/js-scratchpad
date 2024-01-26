(function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Hey!");
})();

/* 
The above code will output:

Hey!
6
6
6
6
6

____________________________________________
____________________________________________

Why?
The setTimeout forms a closure with function x, meaning it remembers the reference to the variables declared in x i.e i
When x is invoked and setTimeout is encountered, the browser Web API timer kicks in and the code proceeds to execute, and hence the for loop also continues executing thereby incrementing the value of i to 6

Once the loop completes and the delay specified in setTimeout is lapsed the callback function is pushed to callback queue, and once the call stack becomes empty, the callback functions are moved to the call stack and start executing.
These callback functions have a reference to the variable i (from the closure) and since the value of i is 6 now, all of the callbacks print 6


How do we resolve this issue??
*/

/*  1. Use let
        Since let enables us to declare block scoped variables, in each and every iteration, a new instance of i will be created
        Hence, every closure setTimeout forms will also have a reference to a different "i", having the correct value
*/

(function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Hey!");
})();

/*  2. Use closure
        We'll enclose the setTimeout in another function, and in the for loop, we will call the function and pass the "i" to the function
        With this setup, "i" will be a local variable for close() function and will be maintained in the closure that setTimeout will form with close(), thus retaining the correct value
*/

(function x() {
  for (let i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }

  console.log("Hey!");
})();
