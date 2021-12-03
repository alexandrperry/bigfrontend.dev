
// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }


/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  if(!node){
    return null
  }
  
  const left = node.left
  node.left = node.right;
  node.right = left
  if(node.left){
    invert(node.left)
  }
  if(node.right){
    invert(node.right)
  }
  
}
