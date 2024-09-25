//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s: string): number {
    
    for (let i=0; i< s.length; i++) {
        const container = [s[i]];
        let k = 1;
        while (s[i] !== s[k]) {
            container.push(s[k]);
            k++;
        }
    }
};