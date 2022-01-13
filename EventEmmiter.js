class EventEmitter {
  events = new Map();

  subscribe(eventName, callback) {
    if(!this.events.has(eventName)) {
      this.events.set(eventName, new Map());
    }
    const id = Symbol();
    this.events.get(eventName).set(id, callback);
    
    return {
      release: () => {
        this.events.get(eventName).delete(id);
      }
    }
  }
  
  emit(eventName, ...args) {
    this.events.get(eventName).forEach((callback) => {
      callback(...args);
    });
  }
}
