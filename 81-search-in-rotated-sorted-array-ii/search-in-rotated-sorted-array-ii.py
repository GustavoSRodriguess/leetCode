class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: bool
        """

        in_array = False
        for num in nums:
            if target == num:
                in_array = True
                break
        return in_array
        