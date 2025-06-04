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

// Two pointer
// Time: O(n)
// Space: O(1)
class Solution {
    isAlphanum(char) {
        const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';
        return alphanum.includes(char.toLowerCase());
    };

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        // create pointers
        let left = 0, right = str.length - 1;

        // while pointers haven't met/crossed each other yet
        while(left < right) {
            // check if both chars are alphanum and haven't crossed
            while(left < right && !this.isAlphanum(str[left])) {
                left++;
            };
            while(right > left && !this.isAlphanum(str[right])) {
                right--;
            };

            // if left and right are not equal, they aren't a palindrome
            if(str[left].toLowerCase() !== str[right].toLowerCase()) {
                return false;
            };

            // update pointers
            left++;
            right--;
        };
        return true;
    };
};