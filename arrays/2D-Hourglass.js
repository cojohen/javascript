/*****************************************************************************
**
**    Title:      2D Hourglass
**    Project:    https://www.hackerrank.com/challenges/2d-array/
**    Author:     Joe Cohen
**    Contact:    <deskofjoe@gmail.com>
**    GitHub:     https://github.com/cojohen
** 
*****************************************************************************/

function hourglassSum(arr) {
    let maxSum = -63;

    const sumRows = (x, y) =>
        {
            return arr[x][y]   + arr[x][y+1]   + arr[x][y+2]
                               + arr[x+1][y+1]
                 + arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2];
        };

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const row = sumRows(j, i);
            
            maxSum = row > maxSum ? row : maxSum;
        }
    }

    console.log(maxSum);
}

const test = [
                [1, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0],
                [0, 0, 2, 4, 4, 0],
                [0, 0, 0, 2, 0, 0],
                [0, 0, 1, 2, 4, 0]
             ];

hourglassSum(test);