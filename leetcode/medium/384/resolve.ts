//https://leetcode.com/problems/shuffle-an-array/description/
//still not completed yet => Miss some case

class Solution {
    originalNums: Array<number> = [];
    Nums: Array<number> = [];
    constructor(nums: number[]) {
        this.Nums = nums;
        this.originalNums = this.Nums;
        
    }

    reset(): number[] {
        return this.originalNums;
    }

    shuffle(): number[] {
        return this.Nums.sort(() => Math.random()-0.5)
    }
}