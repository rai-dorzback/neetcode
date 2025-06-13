// Time: O(n)
// Space: O(n)
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
        // filter string so there are only alphanumeric characters
        s = s.toLowerCase().split('').filter(char => alphanumeric.includes(char)).join('');
        // reverse string
        const reversed = s.split('').reverse().join('');
        // compare strings
        return reversed === s;
    };
};