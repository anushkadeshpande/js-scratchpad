function* generator(array) {
  for(let i=0; i<array.length; i++)
    yield array[i]
} 


const iterator = generator([1,4,6,8,3,9])

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
