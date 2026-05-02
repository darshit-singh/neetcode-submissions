class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let res = []

        if(nums.length < 4) return res;

        nums.sort((a,b) => a - b)

        for(let i = 0; i < nums.length-3; i++){ //outer for loop -> 4 elements left after this
            if(i > 0 && nums[i] == nums[i-1]) continue;

            for(let j = i+1; j < nums.length - 2; j++){
                if(j > i+1 && nums[j] == nums[j-1]) continue;

                let start = j+1;
                let end = nums.length - 1;

                while (start < end){
                    let sum = nums[i] + nums[j] + nums[start] + nums[end];
                    if(sum == target){
                        res.push([nums[i], nums[j], nums[start], nums[end]])
                        start++
                        end--
                        while(start < end && nums[start] == nums[start -1]){
                            start++
                        }
                        while(start < end && nums[end] == nums[end+1]){
                            end--
                        }
                    } else if (sum < target){
                        start++
                    } else {
                        end--
                    }
                }
            }
        }
        return res;
    }
}
