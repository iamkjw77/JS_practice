function solution(){
  let result = '';
  for(let i=1; i<=6; i++){
    for(let j=1; j<=6; j++){
      if(i+j === 6) result += `[ ${i}, ${j} ]` + '\n';
    }
  }
  return result;
}
console.log(solution());