class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        for l in s:
            i = t.find(l)
            if i == -1:
                return False
            else: 
                t = t[i+1:]
        return True