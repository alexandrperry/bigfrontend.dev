
/**
 * @param { Array } arr
 * @param { number } depth
 */

function flat(arr, depth = 1) {
  const resArr = [];
  const rec = (el,d) => {
    if (Array.isArray(el) && depth > d ){
      d++
      for(let i = 0; i<el.length;i++){
        rec(el[i],d)
      }
    }
    else{
       return resArr.push(el)
    }
   
  }
  arr.forEach(el => {
  	 let d = 0
     rec(el,d)
  })
  return resArr
}


function flat(arr, depth = 1) {
  const res = []
  const stack = arr.map(item => [item,depth])

  while(stack.length){
    const [el, depth] = stack.pop();

    if(Array.isArray(el) && depth > 0){
      stack.push(...el.map(item => [item,depth - 1]))
    }else{
      res.push(el)
    }
  }

  return res.reverse()
}

