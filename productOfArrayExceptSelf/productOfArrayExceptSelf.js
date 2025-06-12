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
}
