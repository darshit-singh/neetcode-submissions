class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    //r3 29 may 26
    moveZeroes(nums) {
        //start with 0th index and swap any non-zero number to that pointer

        let s = 0,
            n = nums.length;

        for (let f = 0; f < n; f++) {
            if (nums[f] !== 0) {
                //swap
                [nums[s], nums[f]] = [nums[f], nums[s]];
                s++;
            }
        }
    }
}
