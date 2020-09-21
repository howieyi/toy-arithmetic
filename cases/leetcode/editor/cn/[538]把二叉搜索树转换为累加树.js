//给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节
//点值之和。
//
//
//
// 例如：
//
// 输入: 原始二叉搜索树:
//              5
//            /   \
//           2     13
//
//输出: 转换为累加树:
//             18
//            /   \
//          20     13
//
//
//
//
// 注意：本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-s
//um-tree/ 相同
// Related Topics 树
// 👍 376 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  var sum = 0;
  var dfs = function (root) {
    if (root != null) {
      dfs(root.right);
      sum += root.val;
      console.log(sum);
      root.val = sum;
      dfs(root.left);
    }
  }

  dfs(root);
  return root;
};


//leetcode submit region end(Prohibit modification and deletion)
