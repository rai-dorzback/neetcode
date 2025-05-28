// MY FIRST SOLUTION: Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if they're a different length it's automatically not an anagram
        if(s.length !== t.length) {
            return false;
        };
        // make hash objects
        let countS = {};
        let countT = {};
        // loop through string s
        for(const char of s) {
            // add count of that character to object
            countS[char] ? countS[char]++ : countS[char] = 1;
        };
        // do same for string t
        for(const char of t) {
            // add count of that character to object
            countT[char] ? countT[char]++ : countT[char] = 1;
        };
        // if there are a diff amount of letters in each object, return false
        const listOfChars = Object.keys(countS);
        return listOfChars.every(key => countS[key] === countT[key] === true);
    };
};

console.log(isAnagram('racecar', 'carrace'), true);
console.log(isAnagram('jar', 'jam'), false);

// OPTIMIZED VERSION OF MY SOLUTION: Hash Map
// Time Complexity: O(n + m)
// Space Complexity: O(1) since we have at most 26 characters
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if they're a different length it's automatically not an anagram
        if(s.length !== t.length) {
            return false;
        };
        // make hash objects
        let countS = {};
        let countT = {};
        // loop through string s
        for(let i = 0; i < s.length; i++) {
            // add count of character at that index to object
            countS[s[i]] ? countS[s[i]]++ : countS[s[i]] = 1;
            countT[t[i]] ? countT[t[i]]++ : countT[t[i]] = 1;
        };
        
        // if there are a diff amount of letters in each object, return false
        for(const key in countS) {
            if(countS[key] !== countT[key]) {
                return false;
            };
        };
        return true
    };
};

// OTHER SOLUTION: Hash Table (Using Array)
