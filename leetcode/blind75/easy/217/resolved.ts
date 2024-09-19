//https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
    const newNums = new Set<number>(nums);
    return newNums.size < nums.length ? true : false;
};