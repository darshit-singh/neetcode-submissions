class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    //R1 8 may 26
    moveZeroes(nums) {
        let s = 0
        let f = 0
        let n = nums.length

        while(f < n){
                while(f < n && nums[f] == 0) f++ //find a non zero nums[f]
                if(f >= n) break;
                [nums[s], nums[f]] = [nums[f], nums[s]] //swap
                s++
                f++
        }
    }
}
