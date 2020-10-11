/**********************

	Palindrome Checker
	
	1. Remove space from the string
	2. Reverse Sting 
	3. Check two instance stored in variables

**********************/

function palindromeChecker(string) {
	const trimedString = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	const reversedString = trimedString.split("").reverse().join("").toLowerCase();

	if(trimedString !== reversedString) {
		console.log("Sorry! This isn't Palindrome. Try another one");
	} else {
		console.log("Hurray! This is Palindrome");
	}
};

palindromeChecker("A man, a plan, a canal. Panama") // true