let products = [];

for (let i = 100; i < 1000; i++) {
  for (let j = i; j < 1000; j++) {
    let product = i * j;
    products.push(product);
  }
}
products.sort((a, b) => b - a);

let largestPalindromicNumber;
for (let product of products) {
  if (isPalindromic(product)) {
    largestPalindromicNumber = product;
    break;
  }
}

console.log(largestPalindromicNumber);


function isPalindromic(num) {
  let digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (let i = 0; i < digits.length / 2; i++) {
    if (digits[i] !== digits[digits.length - i - 1]) {
      return false;
    }
  }

  return true;
}
