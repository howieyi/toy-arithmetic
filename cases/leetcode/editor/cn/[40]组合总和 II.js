//给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
//
// candidates 中的每个数字在每个组合中只能使用一次。
//
// 说明：
//
//
// 所有数字（包括目标数）都是正整数。
// 解集不能包含重复的组合。
//
//
// 示例 1:
//
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
//所求解集为:
//[
//  [1, 7],
//  [1, 2, 5],
//  [2, 6],
//  [1, 1, 6]
//]
//
//
// 示例 2:
//
// 输入: candidates = [2,5,2,1,2], target = 5,
//所求解集为:
//[
//  [1,2,2],
//  [5]
//]
// Related Topics 数组 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  var result = [];
  // 排序
  candidates.sort();

  var map = {};
  var numMap = {};
  // hash 缓存每个数组出现的次数
  for (var num of candidates) {
    numMap[num] = numMap[num] || 0;
    numMap[num]++;
  }

  // 校验该数值在结果集中出现的次数是否合法
  var isNumNotOverLimit = (arr, num) => {
    var size = 0;
    for (var it of arr) {
      num === it && size++;
    }

    return size < numMap[num];
  };

  var dfs = (target, buffer, idx) => {
    // 边界跳出
    if (idx === candidates.length) return [];

    if (target === 0) {
      var key = buffer.join(',');
      // 去重
      !map[key] && result.push(buffer);
      map[key] = true;
      return [];
    }

    dfs(target, buffer, idx + 1, idx);

    if (target - candidates[idx] >= 0) {
      // 校验该值出现次数是否合法
      isNumNotOverLimit(buffer, candidates[idx]) && dfs(target - candidates[idx], [...buffer, candidates[idx]], idx);
    }
  };

  dfs(target, [], 0);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
//leetcode submit region end(Prohibit modification and deletion)
