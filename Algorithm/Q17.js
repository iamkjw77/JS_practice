// 시간 초과
// function numberOfPrime(n) {
//   let res = 0;
//   let cnt = 0;

//   for (let i = 2; i <= n; i++) {
//     cnt = 0;
//     for (let j = 2; j <= Math.floor(i / 2); j++) {
//       if (i % j === 0) cnt++;
//     }
//     if (cnt === 0) res++;
//   }
//   return res;
// }

function numberOfPrime(n) {
  const res = new Set();
  for (let i = 1; i <= n; i += 2) {
    res.add(i);
  }
  res.delete(1);
  res.add(2);

  for (let j = 3; j < Math.sqrt(n); j++) {
    if (res.has(j)) {
      for (let k = j * 2; k < n; k += j) res.delete(k);
    }
  }

  return res.size;
}

console.log(numberOfPrime(10)); // 4
console.log(numberOfPrime(5)); // 3
console.log(numberOfPrime(17)); // 7