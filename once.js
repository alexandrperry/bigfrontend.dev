/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let isCalled = false;
  let val;

  return function(...args) {
    if(!isCalled){
      isCalled = true;
      val = func.call(this,...args)
    }
    return val
  }   
}
