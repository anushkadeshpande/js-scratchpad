# Promises

Consider this example
```js
addToCart().then(() => {
  checkout().then(() => {
    proceedToPayment().then(() => {
      showAcknowledgement().then(() => {
        doSomethingElse().then(....)
      })
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
