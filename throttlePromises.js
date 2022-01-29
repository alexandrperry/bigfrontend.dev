/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
// function throttlePromises(funcs, max){
//   // your code here
// }

async function throttlePromises(funcs,max) {
  const returnArr = [];
  const executeArr = [];

  for (let func of funcs) {
    const returnFun = Promise.resolve().then(()=>func());
    returnArr.push(returnFun)

    if(max <= funcs.length){
      const executeFun = returnFun.then(() => executeArr.splice(executeArr.indexOf(executeFun),1))
      executeArr.push(executeFun)
      
      if(executeArr.length >= max){
        await Promise.race(executeArr)
      }
    }
  }

  return Promise.all(returnArr)
}
