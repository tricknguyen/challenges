//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
function canMakeArithmeticProgression(arr: number[]): boolean {
    const newArr = arr.sort((a, b) => a-b);
    const diff = newArr[1] - newArr[0];
    
    return newArr.every((element, index) => index === 0 || element - newArr[index-1] === diff);
};