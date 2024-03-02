const myArr = []

// %DebugPrint(myArr)

const arrTwo = [1, 2, 3, 4, 5] // PACKED_SMI_ELEMENTS

arrTwo.push(6.0) //PACKED_DOUBLE_ELEMENTS

arrTwo.push('7') // PACKED_ELEMENTS

arrTwo[10] = 10 // HOLEY_ELEMENTS

console.log(arrTwo)  // ---> [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 10 ]

console.log(arrTwo[9])   // ---> undefined    >>>>>>> EXPENSIVE OPERATION
// here array is not out of bound
// then hasOwnProperty(arrTwo, 9) will be checked
// then hasOwnProperty(arrTwo.prototype, 9) will be checked
// then hasOwnProperty(Object.prototype, 9) will be checked

// hence, holes are very expensive