(function(num){
    console.log("IIFE")
    for(j=0;j<num.length;j++){
        
    flag = 1
    for(var i =2;i<num[j];i++){
        if(num[j]%i===0){
            flag=0;
            break;
        }
        
        
    }
    if (flag==1){
        
    console.log(num[j]);
    }
    else
    continue;
    }
})([11,12,13,15,27,26,17])

 oddnum= function(num){
    console.log("annonymous")
    for(j=0;j<num.length;j++){
        
    flag = 1
    for(var i =2;i<num[j];i++){
        if(num[j]%i===0){
            flag=0;
            break;
        }
        
        
    }
    if (flag==1){
        
    console.log(num[j]);
    }
    else
    continue;
    }
}

let arr=[11,12,13,15,27,26,17]
    oddnum(arr)

        
         