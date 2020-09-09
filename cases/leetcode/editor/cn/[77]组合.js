//给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
//
// 示例:
//
// 输入: n = 4, k = 2
//输出:
//[
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
//]
// Related Topics 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n < 1 || !k || n < k) return [];

  var result = [];
  var buffer = [];
  var dfs = function (idx, n, k) {
    // 剪枝：buffer 长度加上区间 [idx, n] 的长度小于 k，不可能构造出长度为 k 的 buffer
    if (buffer.length + n - idx + 1 < k) return;

    if (buffer.length === k) {
      result.push([...buffer]);
      return;
    }

    // 选择当前位置
    buffer.push(idx);
    dfs(idx + 1, n, k);

    // 不选择当前位置
    buffer.pop();
    dfs(idx + 1, n, k);
  };

  dfs(1, n, k);
  return result;
};

// console.log(combine(4, 2));
//leetcode submit region end(Prohibit modification and deletion)
