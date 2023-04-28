/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let root = head, pre = null, temp = null;

    while (root.next !== null) {
        // 保存指针
        temp = root.next;

        // 修改当前指针指向前一个节点
        root.next = pre;        
        // 缓存前一个节点指针
        pre = root;

        // 指针移动
        root = temp;
    }

    // 修改尾指针
    root.next = pre;
    return root;
};
// @lc code=end

