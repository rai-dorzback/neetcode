# BUCKET SORT
# O(N) Time & Space Complexity
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # hashmap to count each value
        counts = {}
        # frequency array that has an empty array for every index from 0 to the length of the list
        freq = [[] for i in range(len(nums) + 1)]

        for n in nums:
            # add 1 to the count for that number. if it doesn't exist, set it to 0
            counts[n] = 1 + counts.get(n, 0)
        
        # go through each number in hashmap
        # counts.items() gives every key-value pair in dictionary
        for num, count in counts.items():
            # insert number at the index of the count
            # number occurs count number of times
            freq[count].append(num)

        res = []
        # find top k frequent items. go thru it in descending order
        for i in range(len(freq) - 1, 0, -1):
            # go thru every value in frequency at current index (each value is gonna be an array of numbers at that index's count)
            for n in freq[i]:
                res.append(n)
                # once result array is length k, return result
                if len(res) == k:
                    return res