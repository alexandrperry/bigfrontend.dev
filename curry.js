const join = (a, b, c,d,e,j,k) => {
   return `${a}_${b}_${c}${d}${e}${j}${k}`
}

const curry = fn => {
    return function curried(...args) {
        if(fn.length === args.length){
            return fn(...args)
        }
        else{
            return (...args2) => curried.apply(this,[...args,...args2])
        }
    }
}



const curriedJoin = curry(join);

curriedJoin(1, 2)(3)(4)(5,6,7) // '1_2_3'
