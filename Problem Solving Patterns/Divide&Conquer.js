/*
Divide and Conquer 
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity
*/

//Binary search

function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    let curEle = arr[middle];
    if (curEle > num) {
      max = middle - 1;
    } else if (curEle < num) {
      min = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
