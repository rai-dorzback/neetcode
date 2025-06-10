// Sorting
// Time complexity: O ( m * n log ⁡ n ) O(m * nlogn) 
// Space complexity: O ( m * n ) O(m * n)
// Where m is the number of strings and n is the length of the longest string.
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // array of strings -> arr of subarrays. subarrays will have any anagrams that were in the original array
    groupAnagrams(strings) {
         let result = {};
         for(const str of strings) {
            const sortedWord = str.split('').sort().join('');
            if(!result[sortedWord]) {
                result[sortedWord] = [];
            };
            result[sortedWord].push(str);
         };
         return Object.values(result);
    };
};

console.log(Solution.groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']), [['act', 'cat'], ['pots', 'tops', 'stop'], ['hat']]);