(function(arr){
    console.log("IIFE")
    for(i=0;i<arr.length;i++){
        first=arr[i].substring(0,1).toUpperCase();
        second=arr[i].substring(1)
        
        console.log(first+second)
     
    }
 })(["madam","level","hwllo","civic","hi"])

    caps= function(arr){
        console.log("annonymous")
        for(i=0;i<arr.length;i++){
            first=arr[i].substring(0,1).toUpperCase();
            second=arr[i].substring(1)
            
            console.log(first+second)
         
        }
     }
     
     let arr=["madam","level","hwllo","civic","hi"]
         caps(arr)

        
        