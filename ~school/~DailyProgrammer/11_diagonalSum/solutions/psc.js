// # Diagonal Sum
// Given a "square" array of subarrays, find the sum of values from the first value of the first array,
//  the second value of the second array, the third value of the third array, and so on...
// # Input
// A "square" array of subarrays (A square array of 4 would have 4 subarrays of length 4.)
var square4 =
              [[1, 0, 0, 0],
              [0, 1, 0, 0],
              [0, 0, 1, 0],
              [0, 0, 0, 1]]

var square5 =
             [[2, 5, 1, 3, 9],
              [4, 1, 3, 0, 8],
              [1, 0, 9, 7, 6],
              [1, 7, 7, 3, 0],
              [3, 3, 8, 2, 4]]
// # Output
// The sum of the diagonal. (First value in the first array,
// plus second value in second array, plus third value in third array... etc.)
// diagonalSum(square4) // => 4
// diagonalSum(square5) // => 19

// function diagonalSum (arr){
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     result.push(arr[i])
//   }
//   return result
// }
// console.log(diagonalSum(square4));


function diagonalSum (arr){
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i][i]
  }
  return sum
}
console.log(diagonalSum(square5));
