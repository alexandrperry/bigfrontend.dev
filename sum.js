/**
 * @param {number} num
 */
function sum(num) {
  const fn = (num2) => sum(num + num2);
  fn[Symbol.toPrimitive] = () => num;

  return fn
}
