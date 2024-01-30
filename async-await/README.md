# Async Await

`async` and `await` combo is used to handle promises.

```js
async function getData() {
  return "Hii!"
}
```

If a function returns a value (not a promise), and is async, then the async keyword wraps the value with a promise and returns it.

In short, *an async function always returns a promise*


`await` can only be used inside an async function.

In an `async` block, JS Engine waits for the promise to resolve and only proceeds to the next line once the promise is resolved.