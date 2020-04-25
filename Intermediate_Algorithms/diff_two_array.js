/*
    🔥 Intermediate Algorithm Scripting: Diff Two Arrays

    ⚡ Instruction: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

    🌏 Refference: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
*/


function diffArray(arr1, arr2) {
    // Join both of the array into one
    const joinedArray = arr1.concat(arr2);
    
    // store duplicates items from the array
    return joinedArray.filter(item => !arr1.includes(item) || !arr2.includes(item)); 
  
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);