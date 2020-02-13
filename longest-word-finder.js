/**************

	Longest Word Finder
	
	"I am Shaon Kabir from Bangladesh"
	
	1. convert String into Array
	2. sort the array decending mode and return value 


**************/

ffunction longestWordFinder(string) {

  const convertedString = string.split(" ");

  const sortedValue = convertedString.sort((a,b) => {
    return b.length - a.length;
  })


  // return a IIFE to print out result on Console.
  return (() => {
    console.log(`Longest Word is: ${sortedValue[0]}. It's length is: ${sortedValue[0].length}`)
  })()

}

longestWordFinder("I am Shaon from Bangladesh.") 