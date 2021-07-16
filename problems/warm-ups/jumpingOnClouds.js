/*****************************************************************************
**
**    Title:      Jumping on clouds
**    Project:    https://www.hackerrank.com/challenges/repeated-string/
**    Author:     Joe Cohen
**    Contact:    <deskofjoe@gmail.com>
**    GitHub:     https://github.com/cojohen
** 
*****************************************************************************/

function jumpingOnClouds(c) {
    
    let jumps = 0;
    let i = 0;

    while(i<c.length-1){

        if( i<(c.length-1) && c[i+2]==0 ){
            // jump to c[i+2]
            console.log('jumping 2 - to '+ c[i+2]);
            i+=2;
            jumps++;

        }else{
            // jump to c[i+1]
            console.log('jumping 1 - to '+ c[i+1]);
            i+=1;
            jumps++;
  
        }
    }
    return jumps;
}

let myc = [0,0,0,0,1,0];
let jum = jumpingOnClouds(myc);
console.log(jum);