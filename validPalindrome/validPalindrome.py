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

# Two pointers
# Time: O(n)
# Space: O(1)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        leftPointer = 0
        rightPointer = len(s) - 1

        # while pointers haven't met or crossed each other yet
        while leftPointer < rightPointer:
            # check if both chars are alphanumeric. if not, increment/decrement left/right respectively
            # make sure pointer doesn't go out of bounds
            while leftPointer < rightPointer and not self.alphaNum(s[leftPointer]):
                leftPointer += 1
            
            while rightPointer > leftPointer and not self.alphaNum(s[rightPointer]):
                rightPointer -= 1

            # if left and right are not equal, they aren't a palindrome
            if s[leftPointer].lower() != s[rightPointer].lower():
                return False
            
            # update pointers
            leftPointer += 1
            rightPointer -= 1
        # if loop finishes, it is a palindrome
        return True
    
    def alphaNum(self, char):
        # use ascii values
        # if uppercase character
        return (ord('A') <= ord(char) <= ord('Z') or
                # if lowercase
                ord('a') <= ord(char) <= ord('z') or
                # if digit
                ord('0') <= ord(char) <= ord('9'))