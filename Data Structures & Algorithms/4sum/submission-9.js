class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    //R1 - 5/5/26
    fourSum(nums, target) {
        nums.sort((a,b) => a-b)

        let res = []

        for(let i = 0; i < nums.length - 3; i++){
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            for(let j = i+1; j < nums.length - 2; j++){
                if(j > i+1 && nums[j] == nums[j - 1]) continue;

                let start = j + 1
                let end = nums.length - 1 

                while(start < end){
                    let sum = nums[i] + nums[j] + nums[start] + nums[end]

                    if(sum == target){
                        res.push([nums[i], nums[j], nums[start], nums[end]])
                        start++
                        end--
                        while(start < end && nums[start] == nums[start - 1]) start++
                    } else if (sum < target){
                        start++
                    } else if (sum > target){
                        end--
                    }
                }
            }
        }
        return res
    }
}
