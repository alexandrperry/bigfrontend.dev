
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function(property,val) {
      el.style[property] = val
      return this
    }
  }
}
