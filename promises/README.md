# Promises

Consider this example
```js
addToCart(cart, function(cart) {
  checkout(cart, function(orderId) {
    proceedToPayment(orderId, function(status) {
      showAcknowledgement(function() {
        doSomethingElse()
    })
  })
})
```

In the above example, we have `addToCart` which then calls `checkout` which then calls `proceedToPayment` and so on. 
The callback chain goes on and on, thus forming a callback hell. 
Also, in this callback hell, we're basically giving the control to call the next functions to one of the functions, thereby losing the control over the application.

So, with the above code, 2 problems were introduced:
1. Callback Hell (Pyramid of doom)
2. Inversion of control


To overcome both the issues, promisies are used.

The above code can be re-written as:
```js
const cartPromise = addToCart()
const checkoutPromise = cartPromise.then(() => checkout())
const paymentPromise = checkoutPromise.then(() => proceedToPayment())
const ackPromise = paymentPromise.then(() => showAcknowledgement())
const otherPromise = ackPromise.then(() => doSomethingElse())
```

OR 

```js
addToCart()
  .then(() => checkout())
  .then(() => proceedToPayment())
  .then(() => showAcknowledgement())
  .then(() => doSomethingElse())
```

With this, we revoked the control to call `checkout()` from `addToCart()`, and so on, basically, got rid of the callback hell and also gave the control to the main application.


But, 
### What does the promise actually mean?

Promise is like a placeholder for the result of an action that takes some time to complete. It represents a future value or error that will be available at some point.

*Promise is an object that represents eventual completion of an async operation.*

This is what a Promise object looks like:

![image](https://github.com/anushkadeshpande/js-scratchpad/assets/53345232/c96924d1-5c80-4495-bed9-2cb55675d5c0)

It has a PromiseState which has either of the values:
- pending
- fulfilled
- rejected

> Promise objects are immutable
> They can be resolved only once

When a promise is in `pending` state, it means we're still waiting for the operation to be completed

When it is in `fulfilled` state, it means the operation is completed

When it is in `rejected` state, it means some error has been encountered and the operation could not complete successfully
