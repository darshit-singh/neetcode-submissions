class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a,b) => a-b)
        let n = nums.length;
        let res = [];
        for(let i = 0; i < n - 3; i++){
            if(i > 0 && nums[i]==nums[i-1])continue;

            for(let j = i+1; j < n-2; j++){
                if(j > i+1 && nums[j]==nums[j-1])continue;

                let s = j+1, e = n-1
                while(s < e){
                    let sum = nums[i] + nums[j] + nums[s] + nums[e]
                    if(sum == target){
                        res.push([nums[i], nums[j], nums[s], nums[e]])
                        s++
                        e--
                        while(s < e && nums[s] == nums[s-1])s++
                    } else if(sum < target)s++
                    else e--
                }
            }
        }
        return res;
    }
}
