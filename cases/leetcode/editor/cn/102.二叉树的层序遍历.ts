/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];

    const buffer: TreeNode[] = [root];
    const result: number[][] = [];

    while (buffer.length) {
        const curBuffer = []
        let bLen = buffer.length;

        for (let i = 0; i < bLen; i++) {
            const node = buffer.shift();
            curBuffer.push(node.val);
            node.left && buffer.push(node.left);
            node.right && buffer.push(node.right);
        }

        result.push(curBuffer);
    }


    return result;
};
// @lc code=end

