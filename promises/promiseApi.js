const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 5000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P4 Fail"), 1000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P5 Fail"), 3000);
});

// gets settled after 5s
// --> [ 'P1 Success', 'P2 Success', 'P3 Success' ]
Promise.all([p1, p2, p3]).then((res) => {
  console.log(res); 
});


// gets settled after 1s
// --> P4 Fail
Promise.all([p1, p2, p4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));


// all gets settled after 5s
/* --> [
  { status: 'fulfilled', value: 'P1 Success' },
  { status: 'fulfilled', value: 'P2 Success' },
  { status: 'fulfilled', value: 'P3 Success' }
] 
*/
Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res); 
});


// gets settled after 1s
/* --> 
[
  { status: 'fulfilled', value: 'P1 Success' },
  { status: 'fulfilled', value: 'P2 Success' },
  { status: 'rejected', reason: 'P4 Fail' }
]
*/
Promise.allSettled([p1, p2, p4])
  .then((res) => {
    console.log(res);
  })



// first one gets settled after 2s
/* --> P2 Success */
Promise.race([p1, p2, p3]).then((res) => {
  console.log(res); 
});


// first one gets settled after 1s
/* --> P4 Fail */
Promise.race([p1, p2, p4]).then((res) => {
  console.log(res); 
}).catch(err => console.error(err))


// first one gets successfully settled after 2s
/* --> P2 Success */
Promise.any([p1, p2, p3]).then((res) => {
  console.log(res); 
});


// first one gets successfully settled after 2s
/* --> P2 Success */
Promise.any([p1, p2, p4]).then((res) => {
  console.log(res); 
});


// all get rejected, will return an AggregateError
/* --> 
[AggregateError: All promises were rejected] {
  [errors]: [ 'P4 Fail', 'P5 Fail' ]
}
*/
Promise.any([p4, p5]).then((res) => {
  console.log(res); 
}).catch(err => console.error(err))