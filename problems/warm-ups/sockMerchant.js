/*****************************************************************************
**
**    Title:      sockMercant.js
**    Project:    https://www.hackerrank.com/challenges/sock-merchant/
**    Author:     Joe Cohen
**    Contact:    <deskofjoe@gmail.com>
**    GitHub:     https://github.com/cojohen
** 
**    Problem:
**
**
**
*****************************************************************************/
function sockMerchant(n, ar) {

    let pairs = 0;
   
   loop1: 
    for(let i = 0; i<n; i++){
        
        let sock = ar[i];
    loop2:    
        for(let j=i+1; j<n; j++){
            
            if(ar[i] && ar[j] && sock==ar[j]){
                console.log('Found match: '+ar[i]+','+i+'--'+ar[j]+','+j);
                ar[j] = null;
                pairs++;
                continue loop1;
            }
            
        }
    }
    
    return pairs;
}


let sockbin = [10 ,20 ,20 ,10 ,10 ,30 ,50 ,10, 20];

let found = sockMerchant(sockbin.length, sockbin);

console.log(found);