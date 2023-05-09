/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    let sLen = s.length, tLen = t.length;

    if (sLen < tLen) return '';
    else if (sLen === tLen && s === t) return s;

    const need: Record<string, number> = {};
    for (let i = 0; i < tLen; i++) {
        need[t[i]] = need[t[i]] === undefined ? 1 : need[t[i]] + 1;
    }

    let I = 0, J = 0, tmp;
    for (let i = 0, j = 0; j < sLen; j++) {
        tmp = s[j];
        // 先扫描匹配包含 t 的字符子串
        tLen -= need[tmp] > 0 ? 1 : 0;
        need[tmp] = need[tmp] === undefined ? -1 : need[tmp] - 1;

        if (tLen === 0) {
            // 校验子串是否全部包含 t
            while (i < j && need[s[i]] < 0) {
                need[s[i]]++;
                i++;
            }
            if (J === 0 || j - i < J - I) {
                J = j + 1;
                I = i;
            }
        }
    }
    return s.substring(I, J);
};
// @lc code=end

