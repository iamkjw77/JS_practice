function numPY(s) {
  s = s || '';
  return (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length; 
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true
