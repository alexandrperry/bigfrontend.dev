function throttle(func, wait) {
  // your code here
  let timer = null;
  let lastArgs = null;
  console.log('func',wait)
  return function(...args) {

    if(timer) {
      lastArgs = args;
    } else {
      func.apply(this, args);
      timer = setTimeout(()=>{
        if(lastArgs) {
          func.apply(this,lastArgs);
          timer = null;
        }
      }, wait)

    }
  }
}
