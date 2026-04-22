class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(char) {
        return (
            (char >= "A" && char <= "Z") ||
            (char >= "a" && char <= "z") ||
            (char >= "0" && char <= "9")
        );
    }
    isPalindrome(s) {
        let newStr = "";
        for (let char of s) {
            if (this.isValid(char)) newStr = newStr + char.toLowerCase();
        }

        let start = 0;
        let end = newStr.length - 1;

        while (start <= end) {
            if (newStr[start] !== newStr[end]) return false;
            start++;
            end--;
        }
        return true;
    }
}
