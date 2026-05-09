class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        //slow and fast pointer. both start from 0. fast moves till it encounters a non zero value
        //then swap with the value on the slow pointer. slow ++

        let s = 0
        for(let f = 0; f < nums.length; f++){
            if(nums[f] !== 0) { //non zero value
                [nums[s], nums[f]] = [nums[f], nums[s]]
                s++
            }
        }
        return s
    }
}
