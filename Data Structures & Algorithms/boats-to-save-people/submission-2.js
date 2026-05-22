class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=>a-b)
        let boats=0,s=0,e=people.length-1

        while(s<=e){
            if(people[s]+people[e] <= limit){ //make pair, boats are added below.
                s++
            }
            boats++ //send heavy alone
            e--
        }
        return boats
    }
}
