class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        //solving it with extra O(n) space with a temp array
        let temp = []
        let start1 = 0
        let start2 = 0
        while(start1 < m && start2 < n){
            if(nums1[start1] <= nums2[start2]){
                temp.push(nums1[start1])
                start1++
            } else {
                temp.push(nums2[start2])
                start2++
            }
        }
        //pushing remaining into temp
        temp.push(...nums1.slice(start1, m))
        temp.push(...nums2.slice(start2))

        //copy from temp to nums1
        for(let i = 0; i < nums1.length; i++){
            nums1[i] = temp[i]
        }
    }
}
