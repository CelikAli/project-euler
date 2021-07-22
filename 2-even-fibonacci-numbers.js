let fibSequence = [1, 1];
let sum = 0;

for (let i = 2; true; i++) {
  fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);

  if (fibSequence[i] >= 4_000_000) {
    break;
  }

  if (fibSequence[i] % 2 == 0) {
    sum += fibSequence[i];
  }
}

console.log(sum);
