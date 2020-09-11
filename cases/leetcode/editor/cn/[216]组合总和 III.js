//找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
//
// 说明：
//
//
// 所有数字都是正整数。
// 解集不能包含重复的组合。
//
//
// 示例 1:
//
// 输入: k = 3, n = 7
//输出: [[1,2,4]]
//
//
// 示例 2:
//
// 输入: k = 3, n = 9
//输出: [[1,2,6], [1,3,5], [2,3,4]]
//
// Related Topics 数组 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  var result = [];
  var candidates = [];
  for (var i = 1; i <= n && i <= 9; i++) candidates.push(i);

  var dfs = (target, buffer, idx) => {
    // 边界跳出
    if (idx === candidates.length) return [];

    if (target === 0 && buffer.length === k) {
      // 去重
      result.push(buffer);
      return [];
    }

    dfs(target, buffer, idx + 1, idx);

    if (target - candidates[idx] >= 0) {
      // 校验该值出现次数是否合法
      buffer.indexOf(candidates[idx]) === -1 && dfs(target - candidates[idx], [...buffer, candidates[idx]], idx);
    }
  };

  dfs(n, [], 0);

  return result;
};

console.log(combinationSum3(3, 7));
//leetcode submit region end(Prohibit modification and deletion)
