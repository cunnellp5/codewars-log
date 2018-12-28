// <!-- # Longest String
// Write a function that returns the longest string in the array and it's length
 // as an object.
// ## Input
// An array of strings (e.g ["truck", "sidewalk", "book"])
// ## Output
// An object with the key of the longest string and a value of the length of
// the string (e.g. { sidewalk: 8 }) -->
//


function longestString (arr){
  var counter = 0;
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= counter) {
      counter = arr[i].length;
      str = arr[i];
    }
  }
  return {[str]: counter}
}


function longestString (arr) {
  
}
console.log(longestString(["truck", "sidewalk", "book"]));
