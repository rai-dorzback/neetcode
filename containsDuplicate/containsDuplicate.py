# SOLUTION 1: Hash Set Length
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # create set of nums, compare length of set to length of nums
        return len(set(nums)) < len(nums)

# SOLUTION 2: Hash Set
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hashset = set()
        for num in nums:
            if num in hashset:
                return True
            hashset.add(num)
        return False