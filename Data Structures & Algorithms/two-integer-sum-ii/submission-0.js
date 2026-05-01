class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0, end = numbers.length - 1

        while (start < end) {
            if(numbers[start] + numbers[end] == target) return [start+1, end+1]; //1 indexed
            if(numbers[start] + numbers[end] < target) start++;
            else end--;

        }
    }
}
