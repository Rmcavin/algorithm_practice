//sum all values between and including two positive numbers,
// then return the highest sum if there is a sequence of ranges

//let values = [-3,-4,-5,-7,8,-2,-3,-2,9,-10,-8];
let values = [10,-2,-3,4,-5,-5,-1,12,-6,-4,2]
let bounds = [];
let sums = [];

values.forEach( (el) => {
  if (el > 0) {
    bounds.push(el)
  }
})

 for (let i=0;i<bounds.length;i+=2) {
   let subarray = [];
   for(let j=values.indexOf(bounds[i]);j<=values.indexOf(bounds[i+1]);j++) {
   subarray.push(values[j])
  }
  subarray = subarray.reduce(function(sum,value) {
       return sum + value;
     },0)
     sums.push(subarray)
 }

sums.sort(function(a,b) {
  return a-b;
})
console.log(sums[sums.length-1]);
