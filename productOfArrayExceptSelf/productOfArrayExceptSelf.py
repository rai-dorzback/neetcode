# Prefix and Suffix
# Time: O(n)
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # result output array that's the length of nums. give each position a default of 1
        res = [1] * (len(nums))
        
        prefix = 1
        # loop - nums to find prefixes
        for i in range(len(nums)):
            # set res[i] to the current prefix
            res[i] = prefix
            # multiply current number by prefix to get the next one
            prefix *= nums[i]
        
        postfix = 1
        # loop backwards to find postfix
        for i in range(len(nums) - 1, -1, -1):
            # multiply postfix by prefix already in result to get the number
            res[i] *= postfix
            # update postfix
            postfix *= nums[i]
        return res