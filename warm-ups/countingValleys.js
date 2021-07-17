/*****************************************************************************
**
**    Title:      Counting Valleys
**    Project:    https://www.hackerrank.com/challenges/counting-valleys/
**    Author:     Joe Cohen
**    Contact:    <deskofjoe@gmail.com>
**    GitHub:     https://github.com/cojohen
** 
*****************************************************************************/
function countingValleys(n, path){

    let valleys = 0;
    let seaflag = 0;

    for(let i=0; i<path.length; i++){

        switch(path[i]){
            case 'D':
                seaflag--;
                break;
            case 'U':
                seaflag++;
                if(seaflag==0)
                    valleys++;
                break;
        }
    }

    return valleys;
}

let walk = 'DDUUUUDD';
let val = countingValleys( walk.length, walk);

console.log(val);