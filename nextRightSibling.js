
/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  // your code here
  const queue = [root]
  while(queue.length>0){
    const el = queue.shift();
    if(el == target){
      return queue[0] || null
    }

    if(el.children.length){
      Array.from(el.children).forEach(child => queue.push(child))
    }
  }
}
