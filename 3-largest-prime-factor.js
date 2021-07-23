console.log(largestPrimeFactor(600_851_475_143))

function largestPrimeFactor(num) {
  primeArray = [];
  let primeNum = nextPrime(primeArray);

  while (num > 1) {
    if (num % primeNum === 0) {
      num /= primeNum;
    } else {
      primeNum = nextPrime(primeArray);
    }
  }

  return primeNum;
}

function nextPrime(primeArray) {
  let nextPrimeValue;

  if (primeArray.length === 0) {
    nextPrimeValue = 2;
  } else {
    let nextPrimeFound = false;
    for (let i = primeArray[primeArray.length - 1] + 1; !nextPrimeFound; i++) {
      let noPrimeFactors = true;

      for (let j = 0; noPrimeFactors === true && primeArray[j] < Math.sqrt(i); j++) {
        noPrimeFactors = i % primeArray[j] !== 0;
      }

      if (noPrimeFactors) {
        nextPrimeFound = true;
        nextPrimeValue = i;
      }
    }
  }

  primeArray.push(nextPrimeValue);
  return nextPrimeValue;
}
