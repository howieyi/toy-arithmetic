//给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
//
// 注意：
//
//
// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
//
// Related Topics 字符串


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var buf = '';
  var ch1 = 0, ch2 = 0, remineCh = 0;
  var len1 = num1.length, len2 = num2.length;
  var len = len1 > len2 ? len1 : len2;

  for (var i = 0; i < len; i++) {
    ch1 = i > len1 - 1 ? 0 : +num1.charAt(len1 - 1 - i);
    ch2 = i > len2 - 1 ? 0 : +num2.charAt(len2 - 1 - i);

    var count = remineCh + ch1 + ch2;

    remineCh = Math.floor(count / 10);

    buf = count % 10 + buf;
  }

  return (remineCh || '') + buf;
};
//leetcode submit region end(Prohibit modification and deletion)
