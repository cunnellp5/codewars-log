function zipArrays (arrone, arrtwo){
  var emptyArr = [];
  while (arrtwo.length > 0) {
    var newArr = arrone.shift();
    var newArrTwo = arrtwo.shift();
    emptyArr.push(newArr)
    emptyArr.push(newArrTwo);
  }
  return emptyArr
}



function zipArrays (arrOne, arrTwo){
  var joined = arrOne.concat(arrTwo)
  var result = [];
  for (var i = 0; i < joined.length; i++) {
    result.push(joined[i])
    result.push(joined[arrOne.length + i])
  }
  return result.splice(0, joined.length)
}


function zipArrays (arrOne, arrTwo){
  var joined = arrOne.concat(arrTwo)
  var result = [];
  for (var i = 0; i < joined.length; i++) {
    if (result.length < joined.length) {
      result.push(joined[i])
      result.push(joined[i + arrOne.length])
    }
  }
  return result
}
console.log(zipArrays([1,2,3], [4,5,6]));
