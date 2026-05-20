class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        function reverse(s, e) {
            while (s < e) {
                [nums[s], nums[e]] = [nums[e], nums[s]];
                s++
                e--
            }
        }
        let n = nums.length;
        let s = 0;
        let e = n - 1;
        k = k % n;

        reverse(s,e)
        reverse(s, k-1)
        reverse(k,e)
    }
}
