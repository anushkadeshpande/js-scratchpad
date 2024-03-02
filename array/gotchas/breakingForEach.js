// 1. throw an error

let array = [1, 2, 3, 4, 5]

try {
  array.forEach((it) => {
    console.log(it)
    if (it == 3) {
      throw Error(`We've found the target element.`);
    }
  });
} catch (err) {
  // console.error(err)
}
// prints elements 1, 2 ,3


// 2. Set array length to 0

let array2 = [1, 2, 3, 4, 5]
array2.forEach((it) => {
  console.log(it)
  if (it == 3) {
    array2.length = 0
  }
});

// prints elements 1, 2 ,3



// 3. remove all elements using splice
let array3 = [1, 2, 3, 4, 5]

array.forEach((it, i) => {
  console.log(it)
  if (it >= 3) {
    array.splice(i + 1, array.length - i)
  }
})


// prints elements 1, 2 ,3




// Please never ever do any of these 🫠
