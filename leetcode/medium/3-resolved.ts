//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstringOlSolution(s: string): number {
    const subStringResults: Array<string> = [];
    
    if (s.length == 0) {
        return 0;
    }

    for (let i=0; i< s.length; i++) {
        for (let j =0; j<s.length; j++) {
            const substring = s.slice(i, j);

            if(checkRepeated(substring)) {
                subStringResults.push(substring);
            }
        }
    }

    const sorted = subStringResults.sort((a, b) => a.length - b.length);
    return sorted[subStringResults.length -1].length;
};

function checkRepeated (substring: string): boolean {
    for (let i = 0; i<substring.length; i++) {
        if (substring.indexOf(substring[i]) !== i) {
            return false;
        }
    }

    return true;
}

////// New solution

function lengthOfLongestSubstring(s: string): number {
    const resultSubstrings: Array<string> = [];
    let maxLength = 0;

    for (let i=0; i<s.length; i++) {
        if (resultSubstrings.indexOf(s[i]) > -1) {
            resultSubstrings.splice(0, resultSubstrings.indexOf(s[i]) + 1);
        }
        resultSubstrings.push(s[i]);

        maxLength = Math.max(maxLength, resultSubstrings.length);
    }

    return maxLength;
};
