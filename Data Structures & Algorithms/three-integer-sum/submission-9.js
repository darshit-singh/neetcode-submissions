class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b)
        let n = nums.length
        let res = []
        for(let i = 0; i < n - 2; i++){
            if(i > 0 && nums[i] == nums[i-1]) continue;

            let s = i+1, e = n-1

            while(s < e){
                let sum = nums[i] + nums[s] + nums[e]
                if(sum === 0){
                    res.push([nums[i], nums[s], nums[e]])
                    s++
                    e--
                    while(s < e && nums[s] == nums[s-1])s++
                } else if (sum < 0) s++
                else if (sum > 0) e--
            }
        }
        return res
    }
}
