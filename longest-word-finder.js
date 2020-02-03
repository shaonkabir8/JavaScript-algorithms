/**************

	Longest Word Finder
	
	"I am Shaon Kabir from Bangladesh"
	
	1. convert String into Array
	2. sort the array decending mode and return value 


**************/

function findLongestWord(string) {
  
  const convertedValue = string.split(" ");
  
  const longestWord = convertedValue.sort((a,b) => {
    return b.length - a.length;
  })

  return longestWord[0].length;

}

findLongestWord("I am Shaon Kabir from Bangladesh")