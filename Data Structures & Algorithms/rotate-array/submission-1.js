class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length
        k = k % n
        let newArr = new Array(n)

        for(let i = 0; i < n; i++){
            newArr[(k + i) % n] = nums[i]
        }

        for (let i = 0; i < n; i++){
            nums[i] = newArr[i]
        }
    }
}
