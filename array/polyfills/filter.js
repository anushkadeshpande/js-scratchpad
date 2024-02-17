Array.prototype.filter = function(cb) {
  let arr = this;
  let res = []

  arr.forEach((element, index) => {
    if(cb(element, index, arr))
      res.push(element)
  })

  return res
}

console.log([1, 2, 3, 4, 5, 6, 7].filter(num => num % 2 === 0))