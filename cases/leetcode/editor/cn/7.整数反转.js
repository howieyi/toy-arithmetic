/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var str = x.toString();
  var len = str.length;

  if (len === 0) return x;
  if (len > 32) return 0;

  var newStr = '';
  if (str.startsWith('-')) {
    newStr += '-';
    str = str.substr(1);
  }

  newStr += str.split('').reverse().join('');

  var newX = +newStr;
  var max = 2 ** 31;
  if (newX > max - 1 || newX < -1 * max) return 0;

  return newX;
};
// @lc code=end

console.log(reverse(-123));
