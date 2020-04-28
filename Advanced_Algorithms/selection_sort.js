/*
    🔥 Sorting Algorithms :- Selection Sort

    ⚡ Reference: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort
*/




function selectionSort(arr) {
    console.table(arr)

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) { 
                // 🔥 swap
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}


selectionSort([5, 10, 2, 6, 3, 8, 9, 7, 1])