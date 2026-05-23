class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length
        if(n==0)return 0

        let leftMax = new Array(n).fill(0)
        let rightMax = new Array(n).fill(0)

        leftMax[0] = height[0]
        for(let i = 1; i < n; i++){
            leftMax[i] = Math.max(leftMax[i-1], height[i-1])
        }

        rightMax[n-1] = height[n-1]
        for(let i = n-2; i >= 0; i--){
            rightMax[i] = Math.max(rightMax[i+1], height[i+1])
        }

        let res = 0
        for(let i = 0; i < n; i++){
            let water = Math.min(rightMax[i], leftMax[i]) - height[i]
            if (water >= 0) res += water
        }
        return res
    }
}
