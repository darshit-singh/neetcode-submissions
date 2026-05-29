class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let s = 0, n = nums.length

        for(let f = 0; f < n; f++){
            if(nums[f] !== 0){
                [nums[s], nums[f]] = [nums[f], nums[s]]
                s++
            }
        }
    }
}
