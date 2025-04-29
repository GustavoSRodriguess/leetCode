class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        index = -1
        for num in nums:
            if num == target:
                index = nums.index(num)

        return index