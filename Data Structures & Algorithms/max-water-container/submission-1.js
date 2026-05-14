class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    //R1 14 May 26
    maxArea(heights) {
        let area = 0

        let s = 0, e = heights.length - 1
        while (s < e){
             area =  Math.max(area, (Math.min(heights[s], heights[e]) * (e - s)))
        
            if(heights[s] < heights[e]) s++
            else e--
        }
        return area
    }
}
