// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // The minimum element is in the right half
            left = mid + 1;
        } else {
            // The minimum element is in the left   
            right = mid;
        }
    }

    return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2]));