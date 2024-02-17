/*

Given an array , return an array without duplicates

[1,2,2,4,5,6,5,1] -> [1,2,3,4,5]

*/
const removeDuplicates = (arr) => {
  let set = new Set(arr);
  let resArr = Array.from(set);
  return resArr;
};

console.log(removeDuplicates([1, 2, 2, 4, 5, 6, 5, 1]));
