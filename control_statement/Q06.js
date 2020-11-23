function solution(){
  let num = 9;
  let result = '';
  
  while(num > 0){
    if(num%2) result += (num + '\n');
    num--;
  }
  return result;
}

console.log(solution())