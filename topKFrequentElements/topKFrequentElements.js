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
};

// SOLUTION 2: Bucket Sort
// O(N) space/time complexity
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // create hashmap
        let counts = {};
        // create freq bucket
        let freq = Array.from({length: nums.length + 1}, () => []);

        // loop thru nums to fill out hashmap
        for(const num of nums) {
            counts[num] ? counts[num]++ : counts[num] = 1;
        };

        // loop through hashmap to add count to right bucket
        for(const n in counts) {
            // the count of the current number
            const count = counts[n];
            // add the number to the subarray at the index of the count
            freq[count].push(n);
        };

        // make result arr
        const res = [];
        // loop backwards through frequency
        for(let i = freq.length - 1; i > 0; i--) {
                // for each number in freq subarray
                for(const n of freq[i]) {
                    // add most frequent element to results array
                    res.push(n);
                    // if result length === k, return result
                    if(res.length === k) {
                        return res;
                    };
                };
        };
    };
};