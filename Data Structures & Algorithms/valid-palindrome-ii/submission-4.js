class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //R2 30/4/26
    validPalindrome(s) {
        let start = 0
        let end = s.length - 1

        while (start < end) {
            if(s[start] !== s[end]){ //remember can't do inline increment and decrement here as Im using start and end below
                return (
                    this.isPalindrome(s, start+1, end) || 
                    this.isPalindrome(s, start, end-1)
                )
            }
            start++
            end--
        }
        return true
    }
    isPalindrome(s, start, end){
        while (start < end){
            if(s[start++] !== s[end--]) return false
        }
        return true
    }
}
