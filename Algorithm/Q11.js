function checkPalindrom(str) {
  return [...str].join('') === [...str].reverse().join('');
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true
