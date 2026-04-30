class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    //R1
    mergeAlternately(word1, word2) {
        let start1 = 0
        let start2 = 0
        let res = ''
        while(start1 < word1.length && start2 < word2.length){
            res = res + word1[start1++]
            res = res + word2[start2++]
        }
        res = res + word1.slice(start1)
        res = res + word2.slice(start2)

        return res
    }
}
