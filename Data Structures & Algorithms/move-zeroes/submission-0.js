class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        //instead of moving zeros. Let's find the non zero values and 
        // move it to the start pointer
        let start = 0

        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                [nums[i], nums[start]] = [nums[start], nums[i]]
                start++ //update start after move
            }
        }
    }
}
