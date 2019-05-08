class demoPromise{
    constructor(fn){
        this.state = 'pending';
        this.callback={};
        fn(this.resolve.bind(this),this.reject.bind(this));
    }
    then(fulfilled,rejected){
        if(this.state === 'pending'){
            this.callback.fulfilled = fulfilled;
            if(rejected){
                this.callback.reject = rejected;
            }
        }
        return this
    }
    catch(error){
        if(this.state === 'pending'){
            this.callback.rejected = error;
        }
        return this;
    }
    finally(fn){
        this.callback.finally = fn;
    }
    resolve(val){
        setTimeout(()=>{
            if(this.callback.fulfilled){
                this.state = 'fulfilled';
                this.callback.fulfilled(val);
                if(this.callback.finally){
                    this.callback.finally();
                }
            }else{
                console.error('缺少回调');            
            }
        },0)
    }
    reject(val){
        setTimeout(()=>{
            if(this.callback.rejected){
                this.state = 'rejected';
                this.callback.reject(val);
                if(this.callback.finally){
                    this.callback.finally();
                }
            }else{
                console.error('缺少回调');
            }
        },0)
    }
}
