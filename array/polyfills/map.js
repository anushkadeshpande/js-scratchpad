Array.prototype.map = function(cb){
  let arr = this
  let result = []

  arr.forEach((item, index) => result.push(cb(item, index, arr)))

  return result
}

console.log([1,2,3].map(num => num * 2))