function solution(){
  let sum = 0;
  for(let i=0; i<20; i++){
    if(i%2 === 0 || i%3 === 0) sum += i; 
  }
  return sum;
}

console.log(solution())