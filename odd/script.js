(function(arr){
    console.log("IIFE")
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!==0)
        console.log(arr[i]);
    }
}
    )([1,2,3,4,5])

    oddnum= function(arr){
        console.log("annonymous")
        for(var i =0;i<arr.length;i++){
            if(arr[i]%2!==0)
            console.log(arr[i]);
        }
    }
        oddnum([1,2,3,4,5])
