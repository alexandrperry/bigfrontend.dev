/**
 * cancel all timer from window.setTimeout
 */
const setTimeoutRef = window.setTimeout

const hash = []

window.setTimeout = (func, timeout, ...args) =>{
  const id = setTimeoutRef(func,timeout,args)
  hash.push(id)
  return id
}

function clearAllTimeout() {
  hash.forEach(i => window.clearTimeout(i))
}
