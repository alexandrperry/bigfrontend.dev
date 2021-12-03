
/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let timeoutId = null;

  return (...args) => {
    if(timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this,args), wait)
  }
  
}
