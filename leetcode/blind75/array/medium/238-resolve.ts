//https://leetcode.com/problems/product-of-array-except-self/description/
//The solution not enough good about performance
function productExceptSelf(nums: number[]): number[] {
    const result: Array<number> = [];
    for (let i=0; i< nums.length; i++) {
        const subNums = [...nums.slice(0,i), ...nums.slice(i+1)];
        const multi = subNums.reduce((prevValue,curValue) => {
            return prevValue * curValue
        },1);
        result.push(multi);
    }
    return result;
};
