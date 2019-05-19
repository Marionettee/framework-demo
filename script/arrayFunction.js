function arrayMap(arr,fn){
    if(typeof(arr) === 'object' && arr instanceof Array){
        let newArr = []
        for(let i=0;i<arr.length;i++){
           newArr.push(fn(arr[i]));
        }
        return newArr;
    }else(
        console.error('not a array')
    )
}