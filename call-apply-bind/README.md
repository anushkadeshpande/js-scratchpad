## Call:

Call allows us to do `Function Borrowing`.

It allows to call a function while retaining `this` (reference of the caller)

Example:
```js
name.printFullName2.call(name2, "Hi", "03:01:24")
```

Here, `"Hi"` and `"03:01:24"` are arguments to function `printFullName2` 

## Apply:

Same as call but instead of passing the arguments directly, it expects an array of arguments.

Example:
```js
name.printFullName2.apply(name2, ["Hi", "03:01:24"])
```


## Bind:

Instead of calling the function directly, it binds the method to an object.

Example:
```js
let print = name.printFullName2.bind(name2, "Hi", "03:01:24")
print()
```

Here `print` stores a reference to the function `name2` and also the arguments to be passed to it.

Bind can be useful in scenarios where we prepare the invocation of a function and actually invoke the function later.