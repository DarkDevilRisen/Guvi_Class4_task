var result=(function(arr){
    console.log("IIFE")
    let k=3
    
   for(var i=1;i<=k;i++){
       var rot=arr.reverse();
       
   }
   return rot
})([1, 2, 3,4,5])
console.log(result)



Unique=function(arr){
    console.log("annonymous")
    let k=3
    
   for(var i=1;i<=k;i++){
       var rot=arr.reverse();
       
   }
   return rot
}

let arr=[1, 2, 3,4,5];
var rot=Unique(arr)
console.log(rot)       
         