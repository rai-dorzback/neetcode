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

// HASH TABLE
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strings) {
        const result = {};
        
        // strings - loop
        for(const str of strings) {
            // count characters from a-z for each string
            const count = new Array(26).fill(0);
            // str - loop
            for(const char of str) {
                // add 1 to the index that maps with the current char
                // find that index by doing the character unicode value minus a's unicode value
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            };
            // make key the entire count as a string
            const key = count.join(',');
            // if it doesn't exist as a key yet, set it to an empty array
            if(!result[key]) {
                result[key] = [];
            };
            // push the string to the array at that key
            result[key].push(str);
        };
        // return array of the values (subarrays)
        return Object.values(result);
    };
};
