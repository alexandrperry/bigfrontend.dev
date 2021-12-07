class Observable {
  
  constructor(setup) {
    this.setup = setup
  }
 
  subscribe(subscriber) {
    const observer = new Observer(subscriber);
    this.setup(observer)

    return {
      unsubscribe: () => {
        observer.unsubscribe();
      }
    }
  }
}

class Observer {
  constructor(subscriber){
    console.log(typeof subscriber)
    if(typeof subscriber === 'function'){
       this.subscriber = {
            next: subscriber
        }
    }else{
      this.subscriber = subscriber
    }
    this.withSubscription = true
  }

  next(val){
    if(!this.withSubscription) return
    try {
      this.subscriber.next(val);
    } catch (err) {
      this.error(err);
    }
  }

  error(err) {
    if(!this.withSubscription) return
    this.subscriber.error(err);
    this.unsubscribe();
  }

  complete() {
    if(!this.withSubscription) return
    if(this.subscriber.complete){
        this.subscriber.complete();
    }
    this.unsubscribe();
  }

  unsubscribe() {
    this.withSubscription = false;
  }
}

const observable = new Observable((subscriber)=> {
  subscriber.next(1)
  subscriber.next(2)
  setTimeout(() => {
    subscriber.next(3)
    subscriber.next(4)
    subscriber.complete()
  }, 100)
})

observable.subscribe(x => {
  console.log(x);
})

