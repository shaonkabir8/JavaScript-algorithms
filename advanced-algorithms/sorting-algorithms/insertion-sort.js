/*
    🔥 Sorting Algorithms :- Insertion Sort

    ⚡ Reference: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort
*/




function insertionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};

insertionSort([2,6,5,12,-1,3,8,7,1,-4,0,23,1,-55,20,37,54,210,-23,7,483,9339,29,-3,90,-2,81,54,7372,-92,93,93,18,-43,21])


// 🔥 found on: https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg