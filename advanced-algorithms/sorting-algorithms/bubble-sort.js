/*
    🔥 Sorting Algorithms :- Bubble Sort

    ⚡ Reference: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort
*/



function bubbleSort(arr) {	
	
	console.table(arr)

	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[j] > arr[j+1]) {
				// 🔥 swap
				[arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
			}
		}
	}
    
    return arr; 

	console.log(arr)

}

bubbleSort([5,10,2,6,3,8,9,7,1])