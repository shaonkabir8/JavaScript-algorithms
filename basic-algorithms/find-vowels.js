// FIND VOWELS

// Given a string of words or phrases, count the number of vowels.

// We just need to match String with our Regular Expression
// If Matches, we'll count the 'length' property and return it

const countVowel = string => {

  // RegExp to Match vowels
  const regExp = /[aeiou]/gi;

  // Check if Matched or not ! and Return output on console
  const matches = string.match(regExp);
  return matches ? matches.length : 0;
}


countVowel("I am Shaon Kabir from Bangladesh") // Expected Output:- 10


// Another Way:- using Loop

// Process:-
    // we'll store vowels in a container
    // for caseSencetivity, we'll create string 'LowerCase'
    // we'll convert our string into array removing whiteSpace to iterate a loop on it
    // Then we'll Check using 'includes' methods if vowels available or not !
    // If vowel found, we'll increase 'countVowel' in every iteration

const findVowels = string => {
    let countVowel = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']; // or "aeiou"
    
    const convertedString = string.toLowerCase().split('').filter(space => /\S/.test(space)); 
    console.log(convertedString)
  
    convertedString.forEach(character => {
      if(vowels.includes(character)) {
        countVowel++;
      }
    })
  
    return countVowel;
  };
  
  findVowels("Hello Bangladesh !") // Expected Output:- 5
