function waterMelon(n) {
  return '수박'.repeat(n / 2) + (n % 2 ? '수' : '');
}

console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));
