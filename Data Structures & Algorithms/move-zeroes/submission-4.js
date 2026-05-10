class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    //R2 10 may 26
    moveZeroes(nums) {
        //slow and fast pointer approach
        let s = 0

        for(let f = 0; f < nums.length ; f++){
            if(nums[f] !== 0){ //swap
                [nums[s], nums[f]] = [nums[f], nums[s]]
                s++
            }
        }
        return s
    }
}
