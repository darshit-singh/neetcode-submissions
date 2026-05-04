class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    //R1 4/5/26
    threeSum(nums) {
        nums.sort((a,b) => a - b)
        let res = []

        for(let i = 0; i < nums.length - 2; i++){
            // if(nums[i] > 0) break
            let start = i + 1, end = nums.length - 1
            if(i > 0 && nums[i] == nums[i - 1]) continue;
            
            while(start < end){
                let sum = nums[i] + nums[start] + nums[end]
                if(sum == 0){
                    res.push([nums[i], nums[start], nums[end]])
                    start++
                    end--
                    //handing duplicate inside (start,end) subarray
                    while(start < end && nums[start] == nums[start - 1]) start++;
                }
                else if (sum < 0) start++
                else if (sum > 0) end--
            }
        }
        return res
    }
}
