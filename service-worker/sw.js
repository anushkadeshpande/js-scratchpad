self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Check if the request is an API call that you want to intercept
  if (request.url.includes('/products/1')) {
    // Redirect the request to another URL
    console.log("Redirecting to jsonplaceholder")
    const redirectURL = 'https://jsonplaceholder.typicode.com/todos/1';
    event.respondWith(fetch(redirectURL).then(res => res.json()).then(res => console.log(res)));
  } else {
    // Continue with the normal fetch behavior for other requests
    console.log("Continuing with dummy api")
    event.respondWith(fetch(request));
  }
});
