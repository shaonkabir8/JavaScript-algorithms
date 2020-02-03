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


// Another Way
// 1. Create a empty string variable
// 2. Loop through the string from the oposide using (--) and store them to our Created Empty sting variable;

function reverseString(string) {
	
	let stringContainer = '';

	for(let i =  string.length-1; i>=0; i--) {
		stringContainer += string[i];
	}
	
	return stringContainer;
}

