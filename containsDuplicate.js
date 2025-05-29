// MY FIRST SOLUTION
// Time Complexity: O(n log n) because of sorting
// Space Complexit: O(1) or O(n) depending on the sorting algorithm.
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // sort nums to be ascending
        // store last number that was looped thru
        let lastNum = 0;
        // loop thru nums
        for(const num of nums.sort((a, b) => a - b)) {
            // if current num == last number
            if(num === lastNum) {
                return true;
            };
            lastNum = num;
        };
        return false;
    };
};

console.log(hasDuplicate([1, 2, 2, 3, 3]), true); // true - duplicates
console.log(hasDuplicate([2, 3, 4]), false); // false - no duplicates

// IDEAL SOLUTION
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // if length of nums is greater than size of Set(nums), return true
    hasDuplicate = nums => new Set(nums).size < nums.length;
};

// IDEAL SOLUTION 2 - hash set
// Time Complexity: O(n)
// Space Complexity: O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Create a set
        const seenNums = new Set();
        // loop thru nums
        for(const num of nums) {
            // if num is in the set, return true
            if(seenNums.has(num)) {
                return true;
            };
            // add num to set 
            seenNums.add(num); 
        };
        return false;
    };
};