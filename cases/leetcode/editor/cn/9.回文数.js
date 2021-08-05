/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;

  var temp = x,
    newX = '';
  while (temp !== 0) {
    newX += temp % 10;
    temp = Math.floor(temp / 10);
  }

  return newX === x.toString();
};
// @lc code=end

console.log(isPalindrome(121));
