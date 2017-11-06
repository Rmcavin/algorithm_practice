let start = "examples"
let words = ["pameesxl", "woamxapl", "emaplsic","examplesq"]

let letters = {}
let collection = {}

//COUNT FOR EACH LETTER
for (let letter of start) {
  if (letters[letter]) {
    letters[letter] += 1;
  }
  else {
    letters[letter] = 1;
  }
}

//COUNT FOR EACH LETTER IN EACH WORD
for (let scramble of words) {
  collection[scramble] = {}
  for (let letter of scramble) {
    if (collection[scramble][letter]) {
      collection[scramble][letter] += 1;
    }
    else {
      collection[scramble][letter] = 1;
    }
  }
}

let answers = [];
let compare = ""
//COMPARE BOTH OBJECTS
for (let word of words) {
  //the longer of the two words is the basis for comparison, this ensures no false positives based on length
  if (start.length > word.length) {
    compare = start;
  }
  else {
    compare = word;
  }
  let answer = true;
  for (let letter of compare) {
    if (collection[word][letter] !== letters[letter]) {
      answer = false;
      break;
    }
  }
  answers.push(answer)
}
console.log(answers);
