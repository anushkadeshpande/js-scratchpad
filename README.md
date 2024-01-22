##### *JavaScript is a synchronous, single-threaded language and everything in JavaScript happens inside the Execution Context*

Table of contents:
- [Code Execution](#code-execution)
- [Call Stack](#call-stack)
- [Hoisting](#hoisting)
- [Higher Order Functions](#higher-order-functions)

<hr>

### Code Execution
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
![image](https://github.com/anushkadeshpande/js-scratchpad/assets/53345232/edb2f90b-d081-4dd6-8aeb-e0b4d275d667)

After this, the code inside the function is executed and accordingly values are allocated to `num` and `ans` variables.

When we come to the `return` statement, it finds the value to be returned in its local memory and the value will replace the `undefined` allocated to `square2` with the return value and the execution context for the square function will be deleted, and the program will continue to execute the next statement.

Once the program finishes executing, the execution context is deleted.


### Call Stack:
The call stack manages the execution context.

Whenever a js code is run, the global execution context is pushed into the stack and any execution contexts created during execution will be pushed into the call stack.

*Call stack maintains the order of execution of execution contexts.*

> FYI, Call stack is also called as
> - Execution Context Stack
> - Program Stack
> - Control Stack
> - Runtime Stack
> - Machine Stack 



### Hoisting:
Accessing variables and functions even before initializing it.

> Functions can anyways be accessed as the entire function body is copied in the execution context before execution begins.
> And for variables, they are initialized as undefined, so if they are accessed before intialization, `undefined` will be returned.

> Note:
> Arrow functions are basically variables, so they are hoisted as `undefined` instead of the function body.
> So, if we try to execute an arrow function before declaration, an error will be thrown `x is not a function`

### Hoisting in case of let and const variables:
Variables declared with `let` and `const` are hoisted, but a bit differently.

Whenever a variable is declared using either of `let` and `const`, memory is allocated to them, but in a different space.

Normally, variables declared with `var` are allocated memory in the `Global Memory Space` but in case of `let` and `const` declarations, they are stored in a separate memory space `Script`.
![image](https://github.com/anushkadeshpande/js-scratchpad/assets/53345232/e5c65ff4-03a0-48b9-b9e8-018fdd397547)

These variables cannot be accessed from there and hence are known to be in `Temporal Dead Zone`.

`Temporal Dead Zone` is the time between the declaration of variables and their initialization.




### Higher Order Functions:
Higher Order Functions are functions that take a function as an argument or return a function.
