##### *JavaScript is a synchronous, single-threaded language and everything in JavaScript happens inside the Execution Context*

Whenever we run a JS code, an *Execution Context* is created.
The execution context has 2 components - 

1. Memory Component (Variable Environment)
2. Code Component (Thread of Execution)

Now, the execution context is created in 2 phases - 

1. Creation Phase
2. Execution Phase

For example, consider the below code:
```js
var n = 2;
function square(num) {
  var ans = num * num;
  return ans
}

var square2 = square(n)
var square4 = square(4)
```

In 1st phase, memory is allocated to each and every variable/function and the `Global Execution Context` is created.

Each of the variables is assigned with a value of `undefined` whereas for functions, the entire function body is copied into the execution context.

This is what the execution context looks like after the 1st phase:
![image](https://github.com/anushkadeshpande/js-scratchpad/assets/53345232/f92ad3f8-4ace-47eb-b202-bd642e43becb)

In the execution phase, the code is executed line by line.
So when the 1st line is executed, 
```js
var n = 2;
```

the `undefined` in execution context is replaced with the value 2.

After that, when the `square` function is invoked,  
```js
var square2 = square(n)
```
another execution context is created and memory is allocated to each and every component that is present inside the function and this execution context is pushed into the main execution context.
