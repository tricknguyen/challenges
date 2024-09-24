//https://leetcode.com/problems/first-missing-positive/

function firstMissingPositive(nums: number[]): number {
    const max = Math.max(...nums);
    const firstElement = max < 0 ? 1 : max + 1;
    let result = [firstElement];

    for (let i = 1; i < max ; i++) {
      if (!nums.find(t => t == i)) {
        result.push(i);
      }
    }
    return Math.min(...result);
};