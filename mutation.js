/*

	Case Study:- Basic Algorithm Scripting: Mutations [freeCodeCamp.org]

	1 .Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

	For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

	The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

	Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

*/



function mutation(arr) {

    // store our Array elements and make them LowerCase for case-sensitivity
    const firstElement = arr[0].toLowerCase();
    const secondElement = arr[1].toLowerCase();

    for (let i = 0; i < secondElement.length; i++) {
      if (firstElement.indexOf(secondElement[i]) === -1)
        return false;
    }
    return true;
}

mutation(["hello", "ohel"]); // return true;
// mutation(["hello", "hey"]); // return false;



// Another Way: using Regular Expression

function mutation(arr) {

  const regExp = new RegExp(`^[${arr[0]}]+$`, 'gi') // regExp = /^[FIRST_ELEMENT]+$/gi
  return regExp.test(arr[1]);
}

mutation(["Alien", "Line"]); // return true;
// mutation(["Alien", "Link"]); // return false;