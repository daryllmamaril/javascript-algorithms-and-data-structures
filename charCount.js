//Write a function that takes in a string and returns counts of each character in the string

function charCount(string) {
  const characterCount = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (char.match(/^[0-9a-z]+$/)) {
      if (characterCount[char] > 0) {
        characterCount[char]++;
      } else {
        characterCount[char] = 1;
      }
    }
  }
  return characterCount;
}
//console.log(charCount("abcABC +!!!!7 hello Hi!!%")); //{ '7': 1, a: 2, b: 2, c: 2, h: 2, e: 1, l: 2, o: 1, i: 1 }

function charCount2(str) {
  const result = {};
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (char.match(/^[0-9a-z]+$/)) {
        result[char] = (result[char] || 0) + 1;
      }
    });
  return result;
}
console.log(charCount2("Aabc 1 : !")); // { '1': 1, a: 2, b: 1, c: 1 }
console.log(charCount2("daZz Dazz !*")); // { d: 2, a: 2, z: 4 }
