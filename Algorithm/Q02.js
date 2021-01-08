function getCount8() {
  let count = 0;
  for (let i = 0; i < 10000; i++) {
    if (/8/g.test(i)) {
      const arr = [...(i + '')];
      count += arr.filter(v => v === '8').length;
    }
  }
  return count;
}

console.log(getCount8()); // 4000
