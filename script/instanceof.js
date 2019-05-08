function new_instance_of(leftVal,rightVal){
    let rightPrototype = rightVal.prototype;
    let leftProto = left.__proto__;
    while(true){
        if(leftProto === null){
            return false;
        }
        if(leftProto === rightPrototype){
            return true
        }
        leftProto = leftProto.__proto__;
    }
}
