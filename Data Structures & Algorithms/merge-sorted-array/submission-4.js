class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    //R1 30/4/26
    merge(nums1, m, nums2, n) {
        let start1 = m-1
        let start2 = n-1
        for(let i = m+n-1; i >= 0; i--){
            if(start2 < 0)break; //nums2 finished
            
            if(nums1[start1] >= nums2[start2]){
                nums1[i] = nums1[start1--]
            } else {
                nums1[i] = nums2[start2--]
            }
        }
    }
}
