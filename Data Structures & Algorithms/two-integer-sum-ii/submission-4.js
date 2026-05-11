class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let s = 0, e = numbers.length - 1
        let res = []

        while(s < e){
           let sum = numbers[s] + numbers[e]
            if(sum == target){
                res.push(s+1, e+1)
                s++
                e--
            }
            else if(sum < target)s++
            else if (sum > target)e--
        }
        return res
    }
}
