function twoSum(nums: number[], target: number): number[] {
    const mapper = new Map<number, number>();

    for (let i = 0; i<nums.length; i++) {
        const annotation = target - nums[i];

        if (mapper.has(annotation)) {
            return [i, mapper.get(annotation)!];
        }

        mapper.set(nums[i], i);
    }

    return [];
};

function maxProfit(prices: number[]): number {
    const revenues: Array<number> = [];
    for (let i = 0; i< prices.length; i++) {
        for (let j = i+1; j <prices.length; j++) {
            if (prices[j] > prices[i]) {
                revenues.push(prices[j] - prices[i]);
            }
        }
    }
    return revenues.length > 0 ? Math.max(...revenues) : 0;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 5
function maxProfit2(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i<prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    };
    return maxProfit;
}

function containsDuplicate(nums: number[]): boolean {
    let result = false;
    for (let i = 0; i< nums.length; i++) {
        const temp = nums.filter(t => t==nums[i]);
        if (temp.length > 1) {
            result = true;
        }
    };
    return result;
};

function containsDuplicate2(nums: number[]): boolean {
    return nums.length !== new Set(nums).size;
};

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
function productExceptSelf(nums: number[]): number[] {
    const answer = Array(nums.length).fill(1);

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix = prefix * nums[i];
    }

    let suffix = 1;
    for (let i = nums.length - 1; i>=0; i--) {
        answer[i] = answer[i] * suffix;
        suffix = suffix * nums[i];
    }

    return answer;
};

function maxSubArray2(nums: number[]): number {
    let result = -Infinity;
    let temp = 0;

    for (let i=0; i<nums.length; i++) {
        const sum = temp + nums[i];

        temp = Math.max(sum, nums[i]);
        result = Math.max(temp, result);
    }

    return result;
};


function maxProduct(nums: number[]): number {
    let result = nums[0];
    let maxProduct = nums[0];
    let minProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);

        result = Math.max(result, maxProduct);
    }

    return result;
}

//APPLY BINARY SEARCH APPROACH
function findMin(nums: number[]): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    // If array is not rotated or has one element, return first element
    if (nums.length === 1 || nums[left] < nums[right]) {
        return nums[left];
    }

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2);

        // Compare mid with right to determine which half has the minimum
        if (nums[mid] > nums[right]) {
            left = mid + 1; // Minimum is in the right half
        } else {
            right = mid; // Minimum is in the left half or at mid
        }
    }

    return nums[left];
}

function search(nums: Array<number>, target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid;
        } 
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

function threeSum(nums: number[]): number[][] {
    const newArr = nums.sort((a,b) => a - b);
    const results: number[][] = [];

    for (let i=0; i < newArr.length; i++) {
        const target = -nums[i];

        let left = i;
        let right = nums.length - 1;
        while (left < right) {
            const sums = nums[left] + nums[right];
            if (sums === target) {
                results.push([nums[i], left, right]);
            }

            if (sums > target) {
                left++;
            } else if (sums < target) {
                right--;
            }
        }
    }

    return results;
};

//https://x.com/i/grok/share/4HW30hNPs4PHWObzpqsFIClZQ => continue finding solution at there

