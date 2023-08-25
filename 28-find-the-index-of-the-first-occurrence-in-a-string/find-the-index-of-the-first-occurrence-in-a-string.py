class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        resp = haystack.find(needle)
        return resp