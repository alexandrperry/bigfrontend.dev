/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver = (...args) => args.join('_')) {
  // your code here
  const cache = new Map()
  return function(){
    const cacheKey = resolver(...arguments);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const val = func.apply(this,arguments)
    cache.set(cacheKey,val);
    return val
  }
}
