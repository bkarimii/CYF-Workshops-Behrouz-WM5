/*
This function should return the value of the largest number in the given array. 
Can you fix the bug in this function

*/

function getLargestNum(arr) {
  let largestNum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
let arr = [1, 2, 3, 4, 5];
//let arr2 = [3, 5, 1, 9, -1, 1];

getLargestNum(arr);
