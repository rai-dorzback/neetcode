class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strings) {
        let encoded = '';
        // count length of each string
        for(const str of strings) {
            // put length integer at beginning of encoded string and a # in case there's an integer in the text
            encoded += `${str.length}#${str}`;
        };
        return encoded;
    };

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        // 4#neet
        while(i < str.length) {
            let j = i;
            while(str[j] !== "#") {
                // increment to find j
                j++;
            };
            // find integer for word length - from i thru the delimiter
            let length = parseInt(str.substring(i, j));
            // word ranges from index of the char after delimiter through that plus the length
            let word = str.substring(j+1, j + 1 + length);
            // add word to result
            result.push(word);
            // move i to beginning of next string
            i = j + 1 + length;
        };
        return result;
    };
};
