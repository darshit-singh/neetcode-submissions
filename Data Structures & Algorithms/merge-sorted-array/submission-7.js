class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    // R3 11 may 26
    merge(nums1, m, nums2, n) {
        //pointers
        let e1 = m - 1
        let e2 = n - 1
        let last = m + n - 1

        while( e2 >= 0){
            if(nums1[e1] > nums2[e2]){
                nums1[last--] = nums1[e1--]
            } else{
                nums1[last--] = nums2[e2--]
            }
        }

    }
}
