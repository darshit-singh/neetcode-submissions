class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        //whenever you find a different element you write it on the read pointer
        let read = 1 //if you have 0 it will get changed but we want keep nums[0] as it is unique
        for(let write = 1; write < nums.length; write++){
            if(nums[write] !== nums[write - 1]){
                nums[read] = nums[write]
                read++
            }
        }
        return read
    }
}
