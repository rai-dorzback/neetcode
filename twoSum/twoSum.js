// Hashmap
// Time Complexity: O(n)
// Space Complexity: O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = new Map(); // value: index

        for(let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if(hashMap.has(diff)) {
                return [hashMap.get(diff), i];
            };
            hashMap.set(nums[i], i);
        };
    }
}
