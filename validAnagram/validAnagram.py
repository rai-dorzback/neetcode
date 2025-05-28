# Hash map
# Time Complexity: O(n + m)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # check if strings are same length
        if len(s) != len(t):
            return False
        # 2 hashmaps
        sCount, tCount = {}, {}
        # add characters and counts to hashmaps
        for i in range(len(s)):
            sCount[s[i]] = 1 + sCount.get(s[i], 0)
            tCount[t[i]] = 1 + tCount.get(t[i], 0)
        # iterate thru hashmap and compare counts
        for char in sCount:
            if sCount[char] != tCount.get(char, 0):
                return False
        return True

# VERSION 2: Hash map
# Time Complexity: O(n + m)
# Space Complexity: O(1)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # check if strings are same length
        if len(s) != len(t):
            return False
        # 2 hashmaps
        sCount, tCount = {}, {}
        # add characters and counts to hashmaps
        for i in range(len(s)):
            sCount[s[i]] = 1 + sCount.get(s[i], 0)
            tCount[t[i]] = 1 + tCount.get(t[i], 0)
        
        return sCount == tCount