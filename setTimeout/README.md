Consider the following example:

```js
(function x() {
  var i = 1
  setTimeout(function() {
    console.log(i)
  }, 3000)
  console.log("Hiiiii")
})()
```

> PS This is an IIFE (Immediately invoked function expression)

Here, first of all, `setTimeout` forms a closure with the `function x()` (remembers the reference to i)

Now, the setTimeout takes a callback and starts the timer of the WebAPI and then the rest of the code is executed.

But the code outputs:

```
Hiiiii
1
```

The `Hiiiii` is printed first. Why?

JavaScript is a synchronous language, meaning it does not wait for anything. So when the setTimeout is encountered, it starts the timer provided by the WebAPI and the code execution proceeds to the next line. Once the time specified in the setTimeout is elapsed, the callback function passed to the setTimeout is pushed into the callback queue and once the entire code is done executing and the call stack becomes empty, the callback to setTimeout is pushed into the call stack from the callback queue and then the callback function is executed. 

 <a href="event-loop">`Event Loop`</a> is a component in the browsers that is responsible for putting tasks from callback queue into the call stack.
