class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //R2 8 may 2026
    removeDuplicates(nums) {
        let n = nums.length

        let s = 0
        let f = 1

        while(s < f && f < n){
            if(nums[s] === nums[f]){
                f++
            } else{
                nums[s+1] = nums[f]
                s++
                f++
            }
        }
        return s+1
    }
}
