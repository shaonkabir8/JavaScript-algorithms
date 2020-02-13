function factorialize(num) {

  // If num = 0 OR num = 1, the factorial will return 1
  if(num === 0 || num === 1) {
    return 1;
  }

  // We start the FOR loop with i = 4
  // We decrement i after each iteration 
  for(let i = num-1; i > 1; i-- ) {
    num *= i;
  }

  return num;
}

const result = factorialize(5)
console.log(result)