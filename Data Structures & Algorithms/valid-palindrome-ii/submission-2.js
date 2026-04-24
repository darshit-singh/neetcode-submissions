class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s, start, end) {
        while (start < end) {
            if (s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true;
    }
    //optimized two pointer O(n) approach
    validPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        while(start < end){
            if(s[start] !== s[end]){
                //return if the first skip took place and substring is still not palindrome
                return (
                        this.isPalindrome(s, start + 1, end) || 
                        this.isPalindrome(s, start, end - 1)
                    )
            }
            start ++;
            end --;
        }
        return true;
    }
}
