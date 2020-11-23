function solution(){
  let result = '';
  for(let i=10; i>0; i--){
    if(i%2) result += (i + '\n');
  }
  return result;
}

console.log(solution())