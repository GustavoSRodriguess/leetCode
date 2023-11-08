/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    let res1 = new Set(nums1)
    nums2.forEach(v=>{res1.delete(v)})
    let res2 = new Set(nums2)
    nums1.forEach(v=>{res2.delete(v)})

    return [[...res1], [...res2]]
};