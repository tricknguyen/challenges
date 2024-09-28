//https://www.geeksforgeeks.org/lexicographically-smallest-string-formed-by-removing-at-most-one-character/

function smallestString(s: string): string {
    let result = s.slice(1);

    for (let i = 0; i<s.length; i++) {
        const substring = s.slice(0, i) + s.slice(i+1);

        if (substring < result) {
            result = substring;
        }
    }
    return result;
};