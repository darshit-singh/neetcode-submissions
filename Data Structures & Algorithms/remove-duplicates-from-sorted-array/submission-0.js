class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let start = 0
        let mid = 1

        while (start < nums.length - 1 && mid < nums.length){
            if(nums[start] === nums[mid]){
                mid++
            } else {
                start++ //go to next position
                nums[start] = nums[mid] //write in this next position the new number
                // mid++
            }
        }
        return start+1 //since start is index you return index + 1 for number
    }
}
