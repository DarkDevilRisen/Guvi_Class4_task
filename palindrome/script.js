(function(arr){
    console.log("IIFE")
    // console.log(arr)
     for(i=0;i<arr.length;i++){
         str =arr[i].toString()
         rev=str.split("").reverse().join("")
          if(arr[i]===rev){
             console.log(arr[i])
          }
          else{
              continue;
          }
     }
 })(["madam","level","hwllo","civic","hi"])

 palinArray=function(arr){
    console.log("annonymous")
    // console.log(arr)
     for(i=0;i<arr.length;i++){
         str =arr[i].toString()
         rev=str.split("").reverse().join("")
          if(arr[i]===rev){
             console.log(arr[i])
          }
          else{
              continue;
          }
     }
 }
 let arr=["madam","level","hwllo","civic","hi"]
     palinArray(arr)

        
         