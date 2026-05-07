class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //R3 7 may 26
    isValidPal(s, start, end) {
        while (start < end) {
            if (s[start++] !== s[end--]) {
                return false;
            }
        }
        return true;
    }
    validPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            if (s[start] !== s[end]) {
                return (
                    this.isValidPal(s, start + 1, end) || 
                    this.isValidPal(s, start, end - 1)
                );
            }
            start++;
            end--;
        }
        return true;
    }
}
