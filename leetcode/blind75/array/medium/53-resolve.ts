//https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(nums: number[]): number {
    let result = nums[0];

    for (let i = 0; i< nums.length; i++) {
        let currentSum = nums[i];
        for (let j = i+1; j <nums.length; j++) {
            currentSum = currentSum + nums[j];
            if (currentSum > result) {
                result = currentSum;
            }
        }
    }

    return result;
};