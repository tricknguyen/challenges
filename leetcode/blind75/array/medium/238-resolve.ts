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

//The best optimize solution
function productExceptSelfV2(nums: number[]): number[] {
    const result: Array<number> = [];
    let product = 1;
    let zeros = 0;
    nums.forEach(num => {
        if (num==0) {
            zeros++;
        }
        product = product * num;
    });

    return result;
};