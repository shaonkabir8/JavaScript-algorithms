/*
  	🔥 Intermediate Algorithm Scripting: Search and Replace

    ⚡ Instruction:  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
       ✔ First argument is the sentence to perform the search and replace on.
       ✔ Second argument is the word that you will be replacing (before).
       ✔ Third argument is what you will be replacing the second argument with (after).

    🌏 Refference: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

*/


function searchAndReplace(string, before, after) {

    // Check if the first letter of before (before[0]) is upperCase      
    // if before[0] is upperCase, then make after[0] upperCase

    if (before[0] === before[0].toUpperCase()) {
        after = after.replace(after[0], after[0].toUpperCase());
    }

    // 🔥 if both of them ( before[0] and after[0] ) are lowerCase,
    return string.replace(before, after);
}

searchAndReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");