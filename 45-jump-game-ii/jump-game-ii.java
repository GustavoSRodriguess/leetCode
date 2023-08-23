class Solution {
    public int jump(int[] nums) {
        int ans = 0;
        int end = 0;
        int longe = 0;


        for(int i = 0; i < nums.length - 1; i++){
            longe = Math.max(longe, i + nums[i]);
            if(longe >= nums.length - 1){
                ++ans;
                break;
            }
            if(i == end){
                ++ans;
                end = longe;
            }
        }

        return ans;
    }
}