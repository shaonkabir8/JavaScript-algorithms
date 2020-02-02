/**********************
	Reverse a String

	Target:- We'll write a function which takes a string as it's parameter and return it's reverse.
	
	// we'll go through the steps:-

	1. Convert the string into array [Because Array has a method to reverse item]
	2. Reverse the Array Item
	3. convert Array into String 
***********************/


const reverseString = (string) => {
	
	return string.split('').reverse().join('');
};

const result = reverseString("Bangladesh");
console.log(result);  // Should return "hsedalgnaB"