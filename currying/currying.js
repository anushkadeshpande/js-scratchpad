function sum(a, b, c) {
  return a + b + c;
}


function curry(cb) {
  return (num1) => {
    return (num2) => {
      return (num3) => {
        return(cb(num1, num2, num3))
      }
     }
  }
}

const curriedSum = curry(sum)
console.log(curriedSum(1)(2)(3))

