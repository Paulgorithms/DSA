/*
 Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Output
[-1, 11] the numbers could be in reverse order
*/


const twoNumberSum = (array, targetSum) => {
  // Write your code here.
  let mySet = new Set();

  for (let num of array) {
    const complement = targetSum - num;

    if (mySet.has(complement)) {
       return [complement, num];
    } else {
      mySet.add(num);
    }
  }

  return [];
}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6],10));

/*
Write a function that takes in a non-empty array of distinct integers and an integer representing 
a target sum. If any two numbers in the input array sum up to the target sum, the function should 
return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

Runs constant runtime or O(n) time complexity

Return all pairs matching criteria
https://www.udemy.com/learning-algorithms-in-javascript-from-scratch/learn/lecture/7707498#overview
Sample input: [1, 6, 4, 5, 3, 3], 7
Sample output: [ [ 1, 6 ], [ 3, 4 ], [ 3, 4 ] ]
*/

const twoNumberSum_1 = (numArr, targetSum) => {
  let pairs = [];
  let hashTable = [];
 
  for (let num of numArr) {
    let potentialMatch = targetSum - num;

    if (hashTable.includes(potentialMatch)) {
      pairs.push([num, potentialMatch].sort((a, b) => a - b));
    }

    hashTable.push(num);
  }
  
  return pairs;
}

/*
Return first pair matching criteria
Sample input: [1, 6, 4, 5, 3, 3], 7
Sample output: [ 1, 6 ]
*/

const twoNumberSum_2 = (numArr, targetSum) => {
  let hashTable = [];

  for (const num of numArr) {
    const potentialMatch = targetSum - num;
    if (hashTable.includes(potentialMatch)) {
      return [potentialMatch, num].sort((a, b) => a - b);
    } else {
      hashTable.push(num);
    }
  }

  return [];
}

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

https://leetcode.com/problems/two-sum/description/
*/
  
const twoNumberSum_3 = (nums, target) => {
    let myMap = new Map();
  
    for (let i=0; i < nums.length; i++) {
      
      let compliment = target - nums[i];
      
      if (myMap.has(compliment) ){
        return [i, myMap.get(compliment)]
      }

      myMap.set(nums[i], i);
    }
  return false;
}

console.log(twoNumberSum_1([1, 6, 4, 5, 3, 3], 7)); //Preferred
console.log(twoNumberSum_2([1, 6, 4, 5, 3, 3], 7));
console.log(twoNumberSum_3([2,7,11,15],9));
