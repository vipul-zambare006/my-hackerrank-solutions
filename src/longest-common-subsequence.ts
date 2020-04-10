let a = [1, 2, 3, 4, 1]
let b = [3, 4, 1, 2, 1, 3]

function longestCommonSubsequence(a: number[], b: number[]) {
    const lcs = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
    for (let row = 0; row <= a.length; row++) {
        lcs[0][row] = 0;
    }

    for (let col = 0; col <= b.length; col++) {
        lcs[col][0] = 0;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (a[j - 1] === b[i - 1]) {
                lcs[i][j] = 1 + lcs[i - 1][j - 1];
            } else {
                lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
            }
        }
    }

    if (!lcs[b.length][a.length]) {
        return [''];
    }

    let columnIndex = a.length;
    let rowIndex = b.length
    let longestSub = [];
    while (columnIndex > 0 || rowIndex > 0) {
        if (a[columnIndex - 1] === b[rowIndex - 1]) {
            longestSub.unshift(a[columnIndex - 1]);
            columnIndex -= 1;
            rowIndex -= 1;
        }
        else if (lcs[rowIndex][columnIndex] === lcs[rowIndex][columnIndex - 1]) {
            columnIndex -= 1;
        }
        else {
            rowIndex -= 1;
        }
    }
    return longestSub;
}

console.log(longestCommonSubsequence(a, b));