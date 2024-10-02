//https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(nums: number[]): number {
    let result = nums[0];

    for (let i = 0; i< nums.length; i++) {
        let currentSum = nums[i];
        if (currentSum > result) {
            result = currentSum;
        }
        for (let j = i+1; j <nums.length; j++) {
            currentSum = currentSum + nums[j];
            if (currentSum > result) {
                result = currentSum;
            }
        }
    }

    return result;
};


//// new solution
function maxSubArray2(nums: number[]): number {
    let ans = -10000;
    let curSum = 0;
    nums.forEach(num=>{
        curSum += num;
        if(curSum > ans)
            ans = curSum;
        if(curSum < 0)
            curSum = 0;
    })
    return ans;
};