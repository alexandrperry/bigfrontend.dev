/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs){
  // your code here
  let finished = false

  return (cb) => {
    funcs.forEach((func) => {
      func((...args) => {
        if(finished) return
        cb(...args)
        finished = true
      })
    })
  }  
}
