//https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/

//=> wrong solution try to find another one
function findSpecialInteger(arr: number[]) {
    for (let i=0; i<arr.length; i++) {
        let indexItemLoop = arr.findIndex((t) => t == arr[i]);
        if (indexItemLoop > i) {
            let percentAppear = ((indexItemLoop - i)/arr.length)*100
            if (percentAppear > 25) {
                return arr[i];
            }
        }
    }
};


console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));
