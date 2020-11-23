function solution(){
  let result = '';
  for(let i=0; i<10; i++){
    if(i%2 === 0) result += (i + '\n');
  }
  return result;
}
console.log(solution());