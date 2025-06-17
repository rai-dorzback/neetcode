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

// Came back later to try problem again after having space from it
// Time: O(n)
// Space: O(n)
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if strings are diff lengths, they're not anagrams
        if(s.length !== t.length) {
            return false;
        };
        let countS = {}, countT = {};
        // make hashmap of chars in string s
        for(const char of s) {
            countS[char] ? countS[char]++ : countS[char] = 1;
        };

        // make hashmap of chars in string t
        for(const char of t) {
            countT[char] ? countT[char]++ : countT[char] = 1;
        };

        let sameLetters = true;
        // compare each character and see if frequency is same
        for(const char in countS) {
            if(countS[char] !== countT[char]) {
                sameLetters = false;
                break;
            };
        };

        return sameLetters;
    };
};

// Optimized version of one we came back to
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if strings are diff lengths, they're not anagrams
        if(s.length !== t.length) {
            return false;
        };
        let sChar = {}, tChar = {};

        // make hashmap of chars in string s
        for(let i = 0; i < s.length; i++) {
            sChar[s[i]] ? sChar[s[i]]++ : sChar[s[i]] = 1;
            tChar[t[i]] ? tChar[t[i]]++ : tChar[t[i]] = 1;
        };

        // compare each character and see if frequency is same
        for(const char in sChar) {
            if(sChar[char] !== tChar[char]) {
                return false;
            };
        };

        return true;
    };
};