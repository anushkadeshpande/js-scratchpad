Array.prototype.reduce = function(cb, initialValue) {
  let arr = this;
  let ac = initialValue
  
  arr.forEach((element, index) => {
    if(!ac)
      ac = element
    else
      ac = cb(ac, element)
  })

  return ac
}

console.log([1, 2, 3, 4, 5].reduce((accumulator, current) => accumulator + current ,0))