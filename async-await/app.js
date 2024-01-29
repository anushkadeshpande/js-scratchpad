// Old way (using .then)

const promise = new Promise((resolve, reject) => resolve("Hii I am resolved"));

(function getData() {
  promise.then((data) => console.log(data));
})();

// Using async await

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hii I am resolved using async await"), 5000);
});

(async function handlePromise() {
  console.log(promise2);
  const val = await promise2;
  console.log(val);
})();
