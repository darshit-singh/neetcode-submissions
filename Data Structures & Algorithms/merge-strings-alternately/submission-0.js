class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let newStr = "";
        let start1 = 0,
            start2 = 0;

        //this while loop works till one string exhausts
        while (start1 < word1.length && start2 < word2.length) {
            newStr += word1[start1];
            newStr += word2[start2];
            start1++;
            start2++;
        }
        // now need to append at last of the other string
        newStr += word1.slice(start1);
        newStr += word2.slice(start2);
        return newStr;
    }
}
