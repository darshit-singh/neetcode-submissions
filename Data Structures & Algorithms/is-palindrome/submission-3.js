class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValidChar(char) {
        return (
            (char >= "A" && char <= "Z") || 
            (char >= "a" && char <= "z") || 
            (char >= "0" && char <= "9")
        );
    }
    isValidPal(s){
        let l = 0, r = s.length - 1
        while(l < r){
            if(s[l] !== s[r]) return false
            l++
            r--
        }
        return true
    }
    isPalindrome(s) {
        let newStr = ''
        for(let char of s){
            if(this.isValidChar(char)){
                newStr += char.toLowerCase()
            }
        }
        return this.isValidPal(newStr)
    }

}
