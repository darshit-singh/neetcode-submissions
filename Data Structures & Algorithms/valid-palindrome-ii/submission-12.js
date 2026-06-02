class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0, r = s.length - 1

        while (l < r){
            if(s[l] !== s[r]){
                return (this.isValid(s, l+1, r) || this.isValid(s, l, r-1))
            }
            l++
            r--
        }
        return true
    }
    isValid(s, l, r) {
        while(l < r){
            if(s[l] == s[r]){
                l++
                r--
            } else {
                return false
            }
        }
        return true
    }
}
