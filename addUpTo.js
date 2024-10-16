function addUpTo(n) {
  let total = 0;
  for (i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(6)); //21

function addUpTo2(n) {
  return n * (n + 1) / 2;
}
console.log(addUpTo2(100)); //5050