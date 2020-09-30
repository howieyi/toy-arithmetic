//给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据保证，新值和原始二叉搜索树中的任意节点值都不
//同。
//
// 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。
//
//
//
// 例如,
//
// 给定二叉搜索树:
//
//        4
//       / \
//      2   7
//     / \
//    1   3
//
//和 插入的值: 5
//
//
// 你可以返回这个二叉搜索树:
//
//          4
//       /   \
//      2     7
//     / \   /
//    1   3 5
//
//
// 或者这个树也是有效的:
//
//          5
//       /   \
//      2     7
//     / \
//    1   3
//         \
//          4
//
//
//
//
// 提示：
//
//
// 给定的树上的节点数介于 0 和 10^4 之间
// 每个节点都有一个唯一整数值，取值范围从 0 到 10^8
// -10^8 <= val <= 10^8
// 新值和原始二叉搜索树中的任意节点值都不同
//
// Related Topics 树
// 👍 106 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  var cur = root;

  if (!cur) {
    root = new TreeNode(val);
  }

  while (cur !== null) {
    if (cur.val > val) {
      // 向左子树查找
      if (cur.left) {
        cur = cur.left;
      } else {
        cur.left = new TreeNode(val);
        cur = null;
        break;
      }
    } else {
      // 向右子树查找
      if (cur.right) {
        cur = cur.right;
      } else {
        cur.right = new TreeNode(val);
        cur = null;
        break;
      }
    }
  }

  return root;
};
//leetcode submit region end(Prohibit modification and deletion)
