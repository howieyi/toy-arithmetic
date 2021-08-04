/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums || nums.length === 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    } else if (target > nums[i] && (i === nums.length - 1 || (i < nums.length && target <= nums[i + 1]))) {
      return i + 1;
    }
  }

  return 0;
};
// @lc code=end

console.log(searchInsert([1], 3));
