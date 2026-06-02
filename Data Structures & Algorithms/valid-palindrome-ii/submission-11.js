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
        // while(l < r){
        //     if(s[l] == s[r]){
        //         l++
        //         s--
        //     } else {
        //         return false
        //     }
        // }
        // return true
        while(l < r){
            if(s[l] != s[r]){
                return false
            }
            l++
            r--
        }
        return true
    }
}
