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

Now, the setTimeout takes a callback and puts it in the callback queue. And proceeds to execute the rest of the code.

But the code outputs:

```
Hiiiii
1
```

The `Hiiiii` is printed first. Why?

JavaScript is a synchronous language, meaning it does not wait for anything. So when the setTimeout is encountered, it is pushed into the callback queue and the code execution proceeds to the next line. Once, the entire code is executed, the callback to setTimeout is pushed into the call stack from the callback queue (of course after the specified time is passed) and then the callback function is executed. 

`Event Loop` is a component in the browsers that is responsible for putting tasks from callback queue into the call stack.
