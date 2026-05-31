class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a - b)

        let n = people.length, s = 0, e = n - 1, boats = 0

        while(s <= e){
            let sum = people[s] + people[e]
            if(sum <= limit){
                boats++
                s++
                e--
            } else {
                boats++
                e--
            }
        }
        return boats
    }
}
