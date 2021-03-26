(function dup(arr){
    console.log("IIFE")
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(dup);
})( [1, 2, 3,3,1,3,2,6,4,5,4,3])

Unique=function(arr){
    console.log("annonymous")
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

let arr=[1, 2, 3,3,1,3,2,6,4,5,4,3];
Unique(arr)

        
         