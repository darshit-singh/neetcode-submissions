class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    //R3 9 may 26
    mergeAlternately(word1, word2) {
        //start 1 and start 2
        let s1 = 0, s2 = 0
        let newStr = ''
        while(s1 < word1.length && s2 < word2.length){
            newStr += word1[s1]
            newStr += word2[s2]
            s1++
            s2++
        }   
        newStr += word1.slice(s1)
        newStr += word2.slice(s2)

        return newStr
    }
}
