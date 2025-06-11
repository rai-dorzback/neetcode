# O(m) time
# O(m+n) space
class Solution:

    def encode(self, strings: List[str]) -> str:
        res = ''
        for str in strings:
            res += f'{len(str)}#{str}'
        return res

    def decode(self, str: str) -> List[str]:
        res = []
        i = 0
        # while i is still in range of the string's length
        while i < len(str):
            j = i
            # keep incrementing til we get to pound character
            while str[j] != "#":
                j += 1
            # find length of string from i - j (not inclusive)
            # tells us how many characters we need to read after j to get the characters of the string
            length = int(str[i : j])
            word = str[j + 1 : j + 1 + length]
            res.append(word)
            # moves i to the beginning of the next string
            i = j + 1 + length
        return res