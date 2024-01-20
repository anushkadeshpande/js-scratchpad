# Generators

The purpose of a generator function is to run some code and return some value, then run some more code and return some value, and keep doing this over and over again.
In these functions, `yield` keyword is used to return the values.

In order to use the generator, we need to run the genrator function which will return a generator object which will allow us to manipulate and use the generator.

The generator object has the following methods:

![image](https://github.com/anushkadeshpande/js-scratchpad/assets/53345232/2c9d3175-c273-4e2a-8b30-87b779180cad)

- next() : allows us to execute the function inside the generator
- return(): makes generator return whatever value is passed to return() and then it terminates the generator
- throw(): makes generator throw an error and terminate the generator

Value yield by generator always has `value` and `done` properties

![image](https://github.com/anushkadeshpande/js-scratchpad/assets/53345232/6a0c1150-9da1-4378-9045-29996a1a2c61)

- value: The value returned
- done: If it is false, it means there is still more code to run in the generator function

Applications:
- To implement an infinite loop which will not freeze the program because one step will be executed at a time.
- As an iterator
- Infinite scroll
    > for infinite scroll, we basically track user scroll action and based on some offet position, generator function kicks in and returns some part of data, and we can return once all of the data is returned
- Pagination
- Used in Redux Saga

<br>
<hr>

> **IMPORTANT**
> 
> Arrow functions *cannot* be generator functions
>
> Why??
>
> - Arrow functions do not have a prototype chain means they do not inherit from `Function.prototype`. Hence, they cannot have next, return and throw properties 
> - Arrow functions do not have their own *this* object, instead they lexically bind this (use the one from it's closure). And generators need *this* to reference the functions scope
> - They do not have their own `arguments` object



<hr>

Resources:
- https://blog.stackademic.com/dont-be-afraid-of-javascript-generators-15c998aea652
- https://www.youtube.com/watch?v=IJ6EgdiI_wU&pp=ygUdZ2VuZXJhdG9yIGZ1bmN0aW9uIGphdmFzY3JpcHQ%3D
