class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maximoDoce = max(candies)
        return [candy+extraCandies >= maximoDoce for candy in candies]
        