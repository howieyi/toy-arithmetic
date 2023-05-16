/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function minDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    let leftLen = minDepth(root.left);
    let rightLen = minDepth(root.right);

    return root.left === null || root.right === null ? leftLen + rightLen + 1 : Math.min(leftLen, rightLen) + 1;
};
// @lc code=end

