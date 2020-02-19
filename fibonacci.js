/*

    Fibonacci Number:- Most Popular Algorithms in Mathematics Category

    # Sequence of Fibonacci Number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

*/



// function for getting Fibonacci Numbers
const fibonacciNumber = (n) => {

    // Fibonacci Number Sequence Container
    let fibonacciNum = [1];
  
    // Number Sequence:-
    let currentNum = 1;
    let previousNum = 0;
    
    // Check if number is equal to 1 or not !
    if (n === 1) {
      return fibSequence;
    }
  
    // define our iteration Counter
    let iterationsCounter = n - 1;
    while(iterationsCounter) {
      // update Current Number and Previous Number
      currentNum += previousNum;
      previousNum = currentNum - previousNum;
  
      // Store Current Number to fibonacciNum Container
      fibonacciNum.push(currentNum);
  
      console.log(`currentNum is: ${currentNum} | previousNum is: ${previousNum}`)
    
      iterationsCounter -= 1;
    }
  
    return fibonacciNum;
    
  };
  
  const result = fibonacciNumber(100);
  console.log(result)