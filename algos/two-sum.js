// Problem: Given an array of size n and a target number, find the pair of numbers in the array that sums up to the target number.
// There will only be one valid pair.
// The Array is sorted.
// Return an array of the two target numbers.
// If there is no pair that sums up to the target number, return an empty array.
// If the array contains of a single element, return it if it matches the target number.
// The most simple solution should be O(n^2) time and O(n) space.
// A better solution should be O(n) time and O(n) space.
// example input: [2,3,5,7,8], target: 9
// example output: [2,7]

const twoSum = (arr, target) => {
  const tally = {};

  if (!arr.length || target === undefined) return [];
  if (arr.length === 1 && target === arr[0]) return arr;

  for (let i = 0; i < arr.length; i++) {
    // target - current element = rest;
    // 9 - 2 = 7;
    // 9 - 3 = 6;
    // 9 - 5 = 4;
    // 9 - 7 = 2;
    // rest = target - current element;
    // If I set tally[arr[i]] to true, then eventually I will have an index that is the same as the rest. index + rest will then equal target.
    const rest = target - arr[i];

    if (tally[rest]) {
        return [rest, arr[i]];
    }
    if (!tally[arr[i]]) tally[arr[i]] = true;
  }

  return [];
};

console.log(twoSum([2, 3, 5, 7, 8], 9));
console.log(twoSum([2, 3, 5, 7, 8], 10));
console.log(twoSum([7], 7));
console.log(twoSum([5000, 2999, 7111, -500], 4500));
