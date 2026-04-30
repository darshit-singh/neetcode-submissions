class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //R2 (29/4/26)
    isPalindrome(s) {
        let newStr = ""

        for (let char of s) {
            if (this.isAlphaNumeric(char))
            newStr += char.toLowerCase()
        }

        let start = 0
        let end = newStr.length - 1
        
        while (start <= end){
            if(newStr[start++] !== newStr[end--]) return false
        }
        return true
    }
    isAlphaNumeric(char){
        return(
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        )
    }
}
