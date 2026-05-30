class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //r3 30 may
    removeDuplicates(nums) {
        let n = nums.length

        let s = 0//slow fast pointer
        for(let f = 0; f < n; f++){
            if(nums[s] != nums[f]){
                s++
                nums[s] = nums[f]
            } else {
                continue;
            }
        }

        return s+1
    }
}
