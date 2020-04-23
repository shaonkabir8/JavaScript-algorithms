/**********************
	Celsius to Fahrenheit

Target:- 
	We'll write a function which takes a temperature in Celcius value as it's parameter and return a Fahrenheit value.
	
	Formula:- (0°C × 9/5) + 32 = 32°F

Steps:-
	
	1. Celcius value will be times by 9/5 and Add 32

***********************/

function celciusToFahrenheit(celciusValue) {
	let fahrenheitValue = (celciusValue * 9/5) + 32;
	console.log(`${celciusValue} degree Celcius is equal to ${fahrenheitValue} degree Fahrenheit`);
	return fahrenheitValue;
}

celciusToFahrenheit(32); // 32 degree Celcius is equal to 89.6 degree Fahrenheit
