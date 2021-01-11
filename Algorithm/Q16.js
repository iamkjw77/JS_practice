function sumDivisor(num) {
  const half = Math.floor(num / 2);
  let sum = num;

  for (let i = 1; i <= half; i++) {
    if (num % i === 0) sum += i;
  }

  return sum;
}

console.log(sumDivisor(12)); // 28