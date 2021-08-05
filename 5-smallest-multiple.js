console.log(smallestMultiple(20));

function smallestMultiple(num) {
  let sharedPrimes = {};

  for (let i = 1; i <= num; i++) {
    let primeFactors = primeFactorsOf(i);
    for (const key in primeFactors) {
      if (!sharedPrimes[key] || sharedPrimes[key] < primeFactors[key]) {
        sharedPrimes[key] = primeFactors[key];
      }
    }
  }

  let result = 1;
  for (const key in sharedPrimes) {
    result *= (key ** sharedPrimes[key]);
  }

  return result;
}

function primeFactorsOf(num) {
  let primeArray = [];
  let primeFactors = {};

  let primeNum = nextPrime(primeArray);

  while (num > 1) {
    if (num % primeNum === 0) {
      primeFactors[primeNum] = (primeFactors[primeNum] || 0) + 1;
      num /= primeNum;
    } else {
      primeNum = nextPrime(primeArray);
    }
  }

  return primeFactors;
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
