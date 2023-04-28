/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
class RecentCounter {
    private requests: number[] = [];

    constructor() {

    }

    ping(t: number): number {
        this.requests.push(t);

        while (this.requests.length > 1 && t - this.requests[0] > 3000) {
            this.requests.shift();
        }

        return this.requests.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

