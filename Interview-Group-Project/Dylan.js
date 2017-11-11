//return an array that doubles values

function doubles(arr) {
  return arr.map(el => {
    return el * 2
  });
};

console.log(doubles([1,2,3])) //2,4,6
