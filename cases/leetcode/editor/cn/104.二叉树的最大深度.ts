/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    const arr = [root];
    let len = 0, temp: TreeNode, tempLen: number;

    while (arr.length) {
        len += 1;

        tempLen = arr.length
        for (let i = 0; i < tempLen; i++) {
            temp = arr.shift();

            temp.left && arr.push(temp.left);
            temp.right && arr.push(temp.right);
        }
    }

    return len;
};
// @lc code=end

