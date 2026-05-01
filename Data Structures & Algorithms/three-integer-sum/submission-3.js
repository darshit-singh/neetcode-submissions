class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //sort the array first
        nums.sort((a,b) => a-b)
        let res = []

        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] > 0) break; //sum will be > 0; so terminate
            if(i > 0 && nums[i] == nums[i-1]) continue; //to handle duplicate case
            let start = i+1
            let end = nums.length - 1

            while(start < end){
                let target = -1*nums[i];
                let sum = nums[start] + nums[end]

                if(sum == target){
                    res.push([nums[i], nums[start], nums[end]])
                    //handle pointers for next loop
                    start++;
                    end--;
                    while (start < end && nums[start] == nums[start - 1]) start++; //check if new position is same as old; so increment
                }
                if (sum < target) start++;
                else if (sum > target) end--;
            }
        }
        return res
    }
}
