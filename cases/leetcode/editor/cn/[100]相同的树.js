//给定两个二叉树，编写一个函数来检验它们是否相同。
//
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
//
// 示例 1:
//
// 输入:       1         1
//          / \       / \
//         2   3     2   3
//
//        [1,2,3],   [1,2,3]
//
//输出: true
//
// 示例 2:
//
// 输入:      1          1
//          /           \
//         2             2
//
//        [1,2],     [1,null,2]
//
//输出: false
//
//
// 示例 3:
//
// 输入:       1         1
//          / \       / \
//         2   1     1   2
//
//        [1,2,1],   [1,1,2]
//
//输出: false
//
// Related Topics 树 深度优先搜索


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

  var compareTree = function (a, b) {
    if (a === b && a === null) return true;

    if (b === null || a === null) return false;

    return a.val === b.val && compareTree(a.left, b.left) && compareTree(a.right, b.right);
  };

  return compareTree(p, q);
};

// var t1 = {val: 1, left: {left: {val: 2}, right: {val: 3}, val: 7}, right: {val: 8, left: {val: 4}, right: {val: 5}}};
// var t2 = {val: 5, left: {val: 0, left: {val: 1}, right: {val: 2}}, right: {val: 9, left: {val: 3}, right: {val: 4}}};
// var t1 = {val: 1, left: {val: 2}};
// var t2 = {val: 1, right: {val: 2}};
//
// console.log(isSameTree(t1, t2));
//leetcode submit region end(Prohibit modification and deletion)
