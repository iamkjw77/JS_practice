function fibonacci(n) {
  const res = [0, 1];
  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }

  return res[n];
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8