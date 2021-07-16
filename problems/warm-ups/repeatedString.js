/*****************************************************************************
**
**    Title:      Repeated String
**    Project:    https://www.hackerrank.com/challenges/repeated-string/
**    Author:     Joe Cohen
**    Contact:    <deskofjoe@gmail.com>
**    GitHub:     https://github.com/cojohen
** 
*****************************************************************************/
function repeatedString(s, n) { 

    let countAinS = 0;
    let countRemainder = 0;

    for( let i=0; i<s.length; i++){

        s[(i%s.length)]=='a' ? countAinS++ : '';

        ( (n%s.length)>i && s[(i%s.length)]=='a' ) ? countRemainder++ :'';
        console.log("count-rem "+countRemainder);


    }

    let totalAs = countAinS * Math.floor(n/s.length) + countRemainder;

    return totalAs
}

as = repeatedString('aba', 10);
console.log(as);