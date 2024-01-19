function* simpleGenerator() {
  console.log("Before the 1st yield")
  yield 1
  console.log("After the 1st yield")
  console.log("Before the 2nd yield")
  yield 2
  console.log("After the 2nd yield")
  console.log("Before the 3rd yield")
  yield 3
  console.log("After the 3rd yield")
} 


const generatorObject = simpleGenerator()

console.log(generatorObject)

// obj = 1
const obj = generatorObject.next()
console.log(obj)

// obj = 2
const obj2 = generatorObject.next()
console.log(obj2)

// obj = 3
const obj3 = generatorObject.next()
console.log(obj3)

// obj = undefined
const obj4 = generatorObject.next()
console.log(obj4)

/*
Output:

Before the 1st yield
{value: 1, done: false}

After the 1st yield
Before the 2nd yield
{value: 2, done: false}

After the 2nd yield
Before the 3rd yield
{value: 3, done: false}

After the 3rd yield
{value: undefined, done: true}
*/


function* advancedGenerator() {
  let id = 1

  while(true) {
    const increment = yield id
    if(increment != null)
      id += increment
    else
      id += 1
  }
} 

const generator = advancedGenerator()

// NOTE: Can only pass the values from the 2nd next() call
// passing any value to the 1st call will not help
console.log(generator.next())
console.log(generator.next())
console.log(generator.next(5))
console.log(generator.next())


/*
{value: 1, done: false}
{value: 2, done: false}
{value: 7, done: false}
{value: 8, done: false}

*/