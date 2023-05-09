/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const len = s.length;
    const set = new Set();
    let i = 0, j = 0, maxLen = 0;

    while (i < len) {
        if (set.has(s[i])) {
            set.delete(s[j++]);
        } else {
            set.add(s[i++]);
            maxLen = Math.max(maxLen, set.size);
        }
    }

    return maxLen;
};
// @lc code=end

