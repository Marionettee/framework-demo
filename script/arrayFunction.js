function isArray(obj){
    return typeof(obj) === 'object' && obj instanceof Array
}
function arrayMap(arr,fn){
    if(isArray(arr)){
        let newArr = [];
        for(let i=0;i<arr.length;i++){
           newArr.push(fn(arr[i]));
        }
        return newArr;
    }else(
        console.error('not a array')
    )
}
function arrayFilter(arr,fn){
    if(isArray(arr)){
        let newArr = []
        for(let i=0;i<arr.length;i++){
            if(fn(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }else{
        console.error('not a array')
    }
}