class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValidString(char){
        return(
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
        
    }
    isValidPalindrome(s){
        let start = 0
        let end = s.length - 1
        while(start < end){
            if(s[start] == s[end]){
                start++
                end--
            } else {
                return false
            }
        }
        return true
    }
    isPalindrome(s) {
        let newStr = ''

        for(let char of s){
            if(this.isValidString(char))
            newStr += char.toLowerCase()
        }
        return this.isValidPalindrome(newStr)
    }
}
