console.log(sumSquareDifference2(100));

function sumSquareDifference(num) {
  let normalSum = 0;
  let squareSum = 0;

  for (let i = 1; i <= num; i++) {
    normalSum += i;
    squareSum += (i ** 2);
  }

  return (normalSum ** 2) - squareSum;
}

function sumSquareDifference2(n) {
  return (3 * n ** 4 + 2 * n ** 3 - 3 * n ** 2 - 2 * n) / 12;
}
