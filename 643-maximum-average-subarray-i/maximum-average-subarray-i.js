/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAverage = -Infinity
    let somaAtual = 0

    for(let i = 0; i < nums.length; i++){
        somaAtual += nums[i]

        if (i >= k - 1) {
            maxAverage = Math.max(maxAverage, somaAtual / k);
            somaAtual -= nums[i - (k - 1)];
        }
    }

    return maxAverage
};