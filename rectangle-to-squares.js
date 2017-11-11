function toRects(len,wid) {
  if (len === wid) {
    return null;
  }
  let squares = [];
  while (len > 0 && wid > 0) {
    let [smallSide,bigSide] = len > wid ? [wid,len] : [len,wid]; //destructuring turnary that correctly slots sides into big or small each round
    squares.push(smallSide); //the small side is going to be the square size each round
    len === bigSide ? len-=smallSide : wid-=smallSide; //subtract the smallSide from the bigger side
  }
  return squares;
}

console.log(toRects(5,5));
console.log(toRects(5,3));
console.log(toRects(3,5));
console.log(toRects(20,14));
