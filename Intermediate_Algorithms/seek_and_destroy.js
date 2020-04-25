/*
  	🔥 Intermediate Algorithm Scripting: Seek and Destroy

    ⚡ Instruction: Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

    🌏 Refference: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

*/




function destroyer(arr) {
	console.table(arr)

	// grab Arguments Object except First one by converting into Array
	const args = Array.from(arguments).slice(1);
	console.log(args)

	// Check if the elements of our args are included in First args(Array) or not!
	// If not includes, Return !
	return arr.filter(item => !args.includes(item))
}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
