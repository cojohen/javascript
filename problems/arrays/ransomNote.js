/*****************************************************************************
**
**    Title:      Ransom Note
**    Project:    https://www.hackerrank.com/challenges/ctci-ransom-note/
**    Author:     Joe Cohen
**    Contact:    <deskofjoe@gmail.com>
**    GitHub:     https://github.com/cojohen
**
**    Summary:    
**      The function checkMagazine takes two string array parameters and 
**      determines if the second array can be produced using the elements 
**      of the first array without reusing any elements more than once.
**
**      The problem is solved in two parts by first building a hash table
**      of the first array and then searching the table for the elements of 
**      the second array. The hash table values are integers representing
**      the number of times that element has been stored in the table.  
** 
*****************************************************************************/
function checkMagazine(magazine, note) {

    if (magazine.length < note.length) {  // too few words to build note
        console.log('No');
        return;
    
    } else {
        let hash = (w) => {  // defines hash function
            let output = '';

            for (let i = 0; i < w.length; i++) {
                output += w[i].charCodeAt(0);
            }
            return output;
        }

        //  Build hash table with magazine words  
        let hashes = [];

        for (const word of magazine) {
            const hashed = hash(word);
            
            if (hashes[hashed] != null) {  // element already set once
                ++hashes[hashed];
            } else {
                hashes[hashed] = 1;
            }
        }
        
        // Search hash table for note words
        for (const word of note) {            
            const n_hash = hash(word);

            if (hashes[n_hash] != null && hashes[n_hash] != 0) {                
                --hashes[n_hash];  // prevents duplicates
                continue;

            } else {
                console.log('No');
                return;
            }
        }
        console.log('Yes');
        return;
    }
}
/**
 *  Creates values and tests function
 * 
    const mag1  = ['two', 'times', 'three', 'is', 'not', 'four'];
    const mag2  = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];

    const note1 = ['two', 'times', 'two', 'is', 'four'];
    const note2 = ['ive', 'got', 'some', 'coconuts'];

    console.log(checkMagazine(mag1, note1));
    console.log(checkMagazine(mag2, note2));
*/