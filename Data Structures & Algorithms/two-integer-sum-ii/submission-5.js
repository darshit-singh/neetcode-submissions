class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    //r3 16 may 26
    twoSum(numbers, target) {
        let s = 0
        let e = numbers.length - 1

        while (s < e){
            let sum = numbers[s] + numbers[e]

            if(sum == target) return [s + 1, e + 1] //1 indexed
            else if (sum < target) s++
            else e--
        }
    }
}
