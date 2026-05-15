class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a - b)

        let s = 0, e = people.length - 1
        let boat = 0
        while(s <= e){
            let sum = people[s] + people[e]

            if(sum <= limit){ //send both
                s++
                e--
                boat++
            } else { //sum is more than limit. Send only the heavy one
                boat++
                e--
            }
        }
        return boat
    }
}
