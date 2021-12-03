
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  const queue = [[rootA,rootB]]

  while(queue.length){
   const [node1,node2] = queue.shift();
    if(node1 === target){
      return node2
    }
    for (let i = 0; i < node1.children.length; i++){
      queue.push([node1.children[i],node2.children[i]])
    }
  }
  return null
}
