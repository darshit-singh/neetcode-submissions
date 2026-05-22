class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a-b)
        let boats = 0
        let s=0, e=people.length - 1

        while(s <= e){
            let sum = people[e]+people[s]
            if(sum <= limit){
                boats++ //make pair
                s++
                e--
            } else{
                boats++ //send heavy person alone
                e--
            }
        }
        return boats
    }
}
