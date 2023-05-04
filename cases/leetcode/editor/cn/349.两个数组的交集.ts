/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];

    const mapping = {};

    nums1.forEach(it => (mapping[it] = true));

    nums2.forEach(it => {
        mapping[it] && !result.includes(it) && result.push(it);
    })

    return result;
};
// @lc code=end

