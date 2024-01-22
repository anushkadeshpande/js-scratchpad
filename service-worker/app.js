// Registering service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch((error) => {
    console.error('Service Worker registration failed:', error);
  });
}


let callApi = () => {
  fetch("https://dummyjson.com/products/1")
  .then(res => res.json())
  .then(res => console.log(res))
}