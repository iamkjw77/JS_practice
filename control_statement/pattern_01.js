function star(line){
  let star = '*';
  
  for(let i=1; i<=line; i++){
    star.repeat(i);
  }
}

console.log(star(5));
