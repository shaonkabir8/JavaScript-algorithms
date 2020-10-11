/*
   🔥 Sum all numbers in a range.
    
   const arr =   [ 1 , 4 ] return => sum of the numbers + Number between them
                                1 + 4 = 5           + 2 + 3 = 5  => 10

    if [ 5 , 10 ], then => 15+6+7+8+9 = 45

 */

function sumAll(arr) {

    const [num1, num2] = arr;

    // calculate sum of the items
    let result = num1 + num2;
  
    // grab the big number
    const bigNumber = Math.max(num1, num2);
    
    // grab the small number
    const smallNumber = Math.min(num1, num2);
    
  
  
    // iterate a loop and grab the numbers between them
    let diff = [];
    for( let i = smallNumber + 1; i < bigNumber; i++ ) {
      diff.push(i);
    }
  
    // calculate actual result
    diff.reduce((_,num) => {
      result += num;
    } , 0)

    return result;
  }
  
  sumAll([4, 1]);
  