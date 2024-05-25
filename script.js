// function rotateArray(arr, k) {
//   let n = arr.length;
//   let array = new Array(n);
//   for (let i = 0; i < n; i++) {
//     let poseNUm = (i + k) % n;
//     array[poseNUm] = arr[i];
//   }
//   return array;
// }
// function moveZeroes(nums) {
//   let nonZeroIndex = 0; // Pointer for non-zero elements
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       result[nonZeroIndex] = nums[i];
//       nonZeroIndex++;
//     }
//   }
//   while (nonZeroIndex < nums.length) {
//     result[nonZeroIndex] = 0;
//     nonZeroIndex++;
//   }
//   return result;
// }
// const nums = [0, 1, 0, 3, 12];
// const result = moveZeroes(nums);
// console.log(result); // Output: [1, 3, 12, 0, 0]
// function func(n) {
//   pattern = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       star = "*";
//       pattern += star;
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// // console.log(func((n = 10)));
// function func(inputMatrix) {
//   let n = inputMatrix.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       [inputMatrix[i][j], inputMatrix[j][i]] = [
//         inputMatrix[j][i],
//         inputMatrix[i][j],
//       ];
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     inputMatrix[i].reverse();
//   }
//   return inputMatrix;
// }
// const inputMatrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(func(inputMatrix));
// function func(nums, target) {
//   let pairs = [];
//   let l = 0;
//   let r = nums.length - 1;
//   while (l < r) {
//     let sum = nums[l] + nums[r];
//     if (sum === target) {
//       pairs.push([nums[l], nums[r]]);
//       l++;
//       r--;
//     } else if (sum < target) {
//       l++;
//     } else {
//       r--;
//     }
//   }
//   return pairs;
// }
// const nums = [1, 2, 3, 4, 5];
// const target = 7;
// console.log(func(nums, target));
// function cyclicRotation(nums, k) {
//   let n = nums.length;
//   k = k % n;
//   function rotatedArray() {
//     let prev = nums[n - 1];
//     for (let i = 0; i < n; i++) {
//       let tmp = nums[i];
//       nums[i] = prev;
//       prev = tmp;
//     }
//   }
//   for (let i = 0; i < k; i++) {
//     rotatedArray();
//   }
//   return nums;
// }
// const nums = [1, 2, 3, 4, 5];
// const k = 2;
// const rotatedArray = cyclicRotation(nums, k);
// console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
// //////////////////////////////////////////////////////////////////////////////////////////////////////
// Find the "celebrity" in a party using a given array of people.
// Technique: Two-pointer approach.
// function findCelebrity(n, knows) {
//   let left = 0;
//   right = n - 1;
//   function isCelebrity(celebrity) {
//     for (let i = 0; i < n; i++) {
//       if (i !== celebrity && (knows(celebrity, i) || !knows(i, celebrity))) {
//         return false;
//       }
//     }
//     return true;
//   }
//   while (left < right) {
//     if (knows(left, right)) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   let potentialCelebrity = left;
//   if (isCelebrity(potentialCelebrity)) {
//     return potentialCelebrity;
//   }
// }
// const n = 3;
// const knows = (a, b) => {
//   const matrix = [
//     [0, 1, 0],
//     [0, 0, 0],
//     [0, 1, 0],
//   ];
//   return matrix[a][b];
// };
// const celebrity = findCelebrity(n, knows);
// console.log(celebrity); // Output: 1
// function kadaneAlgorithm(arr) {
//   let max_Curr = [0];
//   let max_Global = [0];
//   for (let i = 1; i < arr.length; i++) {
//     max_Curr = Math.max(arr[i], max_Curr + arr[i]);
//     max_Global = Math.max(max_Curr, max_Global);
//   }
//   return max_Global;
// }
// // Example usage
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log("Maximum sum of contiguous subarray:", kadaneAlgorithm(arr)); // Output: 6
// function func(n) {
//   pattern = "";
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j <= i; j++) {
//       pattern += j;
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(func(5));
// function printPattern(n) {
//   let pattern = "";
//   for (let i = 1; i < 2 * n; i++) {
//     let index = i;
//     if (i > n) {
//       index = 2 * n - i;
//     }
//     for (let j = 1; j <= index; j++) {
//       pattern += "*";
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(printPattern(5));
// function printPattern(n) {
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       pattern += " ";
//     }
//     for (let k = 0; k < i; k++) {
//       pattern += "*";
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(printPattern(5));
// function printPattern(n) {
//   let pattren = "";
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= i; j++) {
//       pattren += " ";
//     }
//     for (let k = 0; k < n - i; k++) {
//       pattren += "*";
//     }
//     pattren += "\n";
//   }
//   return pattren;
// }
// console.log(printPattern(5));
// function printPattern(n) {
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       pattern += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       pattern += "*";
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(printPattern(5));
// function func(n) {
//   let pattern = "";
//   for (let i = n; i >= 1; i--) {
//     for (let j = 0; j < n - i; j++) {
//       pattern += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       pattern += "*";
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(func(5));
// function printPattern(n) {
//     debugger
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       pattern += " ";
//     }
//     for (let k = 0; k < i; k++) {
//       pattern += "*";
//       if (k < i - 1) {
//         pattern += " ";
//       }
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(printPattern(5));
// function func(n) {
//   let pattern = "";
// debugger
//   for (let i = n; i >= 1; i--) {
//     for (let j = 0; j < n - i; j++) {
//       pattern += " ";
//     }
//     for (let k = 0; k < i; k++) {
//       pattern += "*";
//       if (k < i - 1) {
//         pattern += " ";
//       }
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(func(5));
