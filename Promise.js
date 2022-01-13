const statuses = {
  pending: "PENDING",
  fulfilled: "FULFILLED",
  rejected: "REJECTED",
};



class MyPromise {
  constructor(executor) {
    this.status = statuses.pending
    this.result;
    this.handlers = []
    try{
      executor(this.resolve.bind(this),this.reject.bind(this))  
    }catch(e){
      this.reject(e)
    }
    
  }
  executeHandlers(){
    if(this.status === statuses.pending){
      return;
    }
    this.handlers.forEach(handler => {
      queueMicrotask(() => {
        handler[this.status](this.result);
      });
    })

    this.handlers.length = 0;
  }
  
  then(onFulfilled, onRejected) {
    const promise = new MyPromise(() => {})
    this.handlers.push({
      [statuses.fulfilled]: (value) => {
        if(typeof onFulfilled !== 'function'){
          promise.resolve(value)
          return;
        }

        try{
          promise.resolve(onFulfilled(value))
        }catch(e){
          promise.reject((e))
        }
      },
      [statuses.rejected]: (value) => {
        if(typeof onRejected !== 'function'){
          promise.reject(value)
          return;
        }

        try{
          promise.resolve(onRejected(value))
        }catch(e){
          promise.reject((e))
        }
      }
    })

    this.executeHandlers();
    return promise;
  }
  
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  resolve(value){
    if(this.status === statuses.pending){

      if(value instanceof MyPromise) {
        value.then(this.resolve.bind(this), this.reject.bind(this));
        return;
      }

      this.status = statuses.fulfilled
      this.result = value;
      this.executeHandlers()
    }
    
  }

  reject(value){
    if(this.status === statuses.pending){
      this.status = statuses.rejected
      this.result = value;
      this.executeHandlers()
    }
  }
  
  static resolve(value) {
     return new MyPromise((resolve) => {
      resolve(value);
    })
  }


  
  static reject(value) {
    return new MyPromise((resolve, reject) => {
      reject(value);
    })
  }
}


const promiseTimeout = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Time is over");
    reject(new Error("Error"));
  }, 1000);
});

promiseTimeout
    .then((data) => {
      console.log('data',data);
    })
    .then(() => {
      console.log("step 2");
      throw new Error("Error!");
    })
    .catch((err) => console.log(err.message ? err.message : err));
