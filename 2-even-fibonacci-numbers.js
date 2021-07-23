let fibSequence = [1, 1];
let sum = 0;

for (let i = 2; true; i++) {
  let currentNum = fibSequence[i - 1] + fibSequence[i - 2];
  fibSequence.push(currentNum);

  if (currentNum >= 4_000_000) {
    break;
  }

  if (currentNum % 2 == 0) {
    sum += currentNum;
  }
}

console.log(sum);
