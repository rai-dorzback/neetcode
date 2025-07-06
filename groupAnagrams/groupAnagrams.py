class Solution:
    # arr of strings -> arr of subarrays of anagrams
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # hashmap. key = count of each letter. value = arr of strings that have that same count
        # defaultdict will make the default value a list if it doesn't exist
        result = defaultdict(list) # mapping charCount of each string to List of anagrams

        # for each string in arr of strings
        for string in strs:
            # 26 0s, one for each character a - z
            count = [0] * 26

            # want to map a to 0 index
            for char in string:
                # subtract current ascii value from value of a to get index
                charIndex = ord(char) - ord("a")
                # increment count of that character
                count[charIndex] += 1
            
            # use the count array as key and append current string to value array
            # make count a tuple as lists cannot be keys in python dictionaries
            result[tuple(count)].append(string)
        
        # gives us values, anagrams taht are grouped together
        return list(result.values())

print(groupAnagrams(["act","pots","tops","cat","stop","hat"]), [["act", "cat"], ["pots", "tops", "stop"], ["hat"]])
print(groupAnagrams([""]), [[""]])