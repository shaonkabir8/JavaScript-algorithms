/**********************

	Palindrome Checker
	
	1. Remove space from the string
	2. Reverse Sting 
	3. Check two instance stored in variables

**********************/

function palindromeChecker(string) {
	const trimedString = string.replace(/ /g, "");
	const reverdedString = trimedString.split("").reverse().join("");

	if(string != reverdedString) {
		console.log("Sorry! This isn't Palindrome. Try another one");
	} else {
		console.log("Hurray! This is Palindrome");
	}
};

palindromeChecker("wow") // true