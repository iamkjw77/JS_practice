function solution(){
  let num = 0;
  let result = '';

  while(num < 10){
    if(num%2 === 0) result += (num + '\n');
    num++;
  }
  return result;
}
console.log(solution())