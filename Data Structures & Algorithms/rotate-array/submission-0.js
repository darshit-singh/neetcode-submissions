class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        //just if k is more than nums length
        k = k % nums.length

        let temp = new Array(nums.length)

        for(let i = 0; i < nums.length; i++){
            temp[(k + i) % nums.length] = nums[i]
        }

        for(let i = 0; i < nums.length; i++){
            nums[i] = temp[i]
        }
    }
}
