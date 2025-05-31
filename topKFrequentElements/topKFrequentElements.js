// SOLUTION 1: Brute force
// Time Complexity: O(n log n)
// Space Complexity: O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashmap = {};
        // create hashmap of nums with their count
        for(const num of nums) {
            hashmap[num] ? hashmap[num]++ : hashmap[num] = 1;
        };
        // sort hashmap
        const sorted = Object.entries(hashmap)
            .sort((a, b) => b[1] - a[1]);
        // return k most frequent
        let result = [];
        for(let i = 0; i <= k-1; i++) {
            result.push(sorted[i][0])
        };
        return result;
    };
}
