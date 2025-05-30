# SOLUTION: hash map
# Time Complexity: O(n)
# Space Complexity: O(n)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # hash map of previous values
        hashMap = {} # value: index
        
        # loop thru nums
        for i in range(len(nums)):
            # calculate target - currentNum
            diff = target - nums[i]
            # if difference is already in the hashmap
            if diff in hashMap:
                # return that number's index first, then the current index
                return [hashMap[diff], i]
            # add current number and index to the hashmap
            hashMap[nums[i]] = i

# Examples
print(Solution.twoSum([3, 4, 5, 6], 7), [0, 1]) # 3 + 4 = 7, so index 0 and 1 should be returned
print(Solution.twoSum([4, 5, 6], 10), [0, 2]) # 4 + 6 = 10
print(Solution.twoSum([5, 5], 10), [0, 1]) # 5 + 5 = 10

# questions about edge cases
'''
will the array ever have less than 2 items in it? will it ever be empty?
will the array have negative numbers?
can the target be negative?
'''