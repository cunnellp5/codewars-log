// # Find Greater
// Write a function that takes two arguments.
//  The first argument is an array of numbers.
//   The second argument is a number two compare with each item in the array.
//    Your function should return an array of numbers that are greater than the second argument.
//
// Example:
// findGreater([1,2,3,4,5,6,7,8], 5);
// // => [6,7,8]
// ## Input
// 2 inputs:
// An array of numbers [1, 2, 3, 4, 5, 6, 7, 8] and a number to compare each number with
// ## Output
// An array of numbers that are greater than the second argument (e.g. [6,7,8])

function findGreater (arr, num){
  var emptyArr = [];
  if (arr[num+1]=num) {
    return arr.slice(arr[num+1], arr.length)
  }
}
console.log(findGreater([1,2,3,4,5,6,7,8], 5));


function findGreater (arr, num){
  var emptyArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      emptyArr.push(arr[i])
    }
  }
  return emptyArr
}
console.log(findGreater([1,2,3,4,5,6,7,8], 5));



function findGreater (arr, num){
  var filtered = arr.filter(function(element){
    return element > num
  })
  return filtered
}
console.log(findGreater([1,2,3,4,5,6,7,8], 5));
