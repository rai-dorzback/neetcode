// BRUTE FORCE
// Time: O(n^2)
// Space: O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        for(let i = 0; i < nums.length; i++) {
            let numsExceptCurrent = [...nums];
            // remove current number
            numsExceptCurrent.splice(i, 1);
            // multiply together numsExceptCurrent
            const product = numsExceptCurrent.reduce((a, b) => a * b, 1);
            // add product to result
            result.push(product);
        };
        return result;
    };
};

// SOLUTION 2: Prefix and Suffix
// Time: O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = n;
        let result = new Array(n).fill(1);
        let prefix = 1;
        // compute prefix array (product before current num)
        for(let i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        };
        let postfix = 1;
        // compute suffix array (product after current num)
        for(let i = n - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i]
        };
        return result;
    };
};