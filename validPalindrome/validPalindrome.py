# Time and space: O(n)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        newStr = ""
        # filter non-alphanumeric characters
        for char in s:
            # if alphanumeric
            if char.isalnum():
                # add lowercase char to new string
                newStr += char.lower()
        # reverse string
        reversed = newStr[::-1]
        # compare
        return newStr == reversed