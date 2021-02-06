const curry = (fn) => {
	return function curried(...args) {
  	if(args.length>=fn.length){
    	return fn.apply(this,args)
    }
    else{
    	return function (...args2){
      	return curried.apply(this,[...args,...args2])
      }
    }
  }
}


const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
