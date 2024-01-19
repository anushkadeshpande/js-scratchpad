function* idGenerator() {
  let id = 1

  while(true) {
    yield id
    id ++
  }
} 


const generatorObject = idGenerator()

console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())


/*
{value: 1, done: false}
{value: 2, done: false}
{value: 3, done: false}
{value: 4, done: false}
{value: 5, done: false}
{value: 6, done: false}
{value: 7, done: false}
*/