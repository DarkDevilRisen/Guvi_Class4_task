(function(arr1,arr2){
    console.log("IIFE")
    var arr=arr1.concat(arr2).sort()
    len=arr.length;
    //console.log(arr)
    if(len%2==0){
        m1=parseInt((len-1)/2)
        m2=parseInt((len+1)/2)
        med=(arr[m1]+arr[m2])/2
    }
    
       console.log(med)
    })([1,6,3,7,5],[1,2,8,9,4])

median=function(arr1,arr2){
    console.log("annonymous")
    var arr=arr1.concat(arr2)
    len=arr.length;
    //console.log(len)
    if(len%2==0){
        m1=parseInt((len-1)/2)
        m2=parseInt((len+1)/2)
        med=(arr[m1]+arr[m2])/2
    }
    
       console.log(med)
    }
    let arr1=[1,2,3,4];
    let arr2=[1,2,3,4];
        median(arr1,arr2)

        
         