/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    const root: ListNode = { val: 0, next: null };
    let r1 = l1, r2 = l2, r = root, temp = 0;

    while (r1 !== null || r2 !== null) {
        let sum = (r1?.val || 0) + (r2?.val || 0) + temp;

        if (sum >= 10) {
            r.val = sum % 10;
            temp = 1;
        } else {
            temp = 0;
            r.val = sum;
        }

        r1 = r1 && r1.next ? r1.next : null;
        r2 = r2 && r2.next ? r2.next : null;

        if (r1 || r2) {
            r.next = { val: 0, next: null };
            r = r.next;
        }
    }

    if (temp > 0) {
        r.next = { val: temp, next: null };
    }

    return root;
};
// @lc code=end

