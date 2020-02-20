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