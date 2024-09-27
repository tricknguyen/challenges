//https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/

//=> wrong solution try to find another one
function findSpecialInteger(arr: number[]) {
    let result = arr[0];
    let count = 0;
    if (arr.length == 1) {
        return arr[0];
    } else {
        for (let i = 1; i < arr.length; i++) {
            if (result == arr[i]) {
                count++;
                if ((count / arr.length) * 100 > 25) {
                    return result;
                }
            } else {
                result = arr[i];
            }
        }
    }
};


console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));
