class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // r3 24 may 26
    maxArea(heights) {
        let s = 0
        let e = heights.length - 1
        let area = 0
        while (s < e){
            area = Math.max(area, Math.min(heights[s], heights[e]) * (e-s))

            if(heights[s] < heights[e]) s++
            else e--
        }
        return area
    }
}
