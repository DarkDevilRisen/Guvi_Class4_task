(function(arr){
    console.log("annonymous")
    let sum = 0;
    for(var i =0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    console.log(sum);
})([1,2,3,5,5])



sum= function(arr){
    console.log("IIFE")
    let sum = 0;
    for(var i =0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    console.log(sum);
}

let arr=[1,2,3,4,5]
    sum(arr)     
         