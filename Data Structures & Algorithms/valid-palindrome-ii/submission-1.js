class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        while (start < end) {
            if (s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true;
    }
    //optimized two pointer approach - BUT slice causes worse time complexity
    validPalindrome(s) {
        let start = 0
        let end = s.length - 1

        while(start < end){
            if(s[start] !== s[end]){
                //since two chars are different, one must go to make palindrome
                //1. skip left char and check if remaining is a palindrome
                if(this.isPalindrome(s.slice(start+1, end+1))) return true;
                
                //2. skip right char and check if remaining is a palindrome
                if(this.isPalindrome(s.slice(start, end))) return true
                return false
            }
            start++;
            end--;
        }
        return true
    }
}
