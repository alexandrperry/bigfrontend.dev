/** 
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedList = (list) => {
    // your code
    let node = list;
    let prevNode = null;

    while(node){
        let nextNode = node.next;
        node.next = prevNode;
        prevNode = node;
        node = nextNode
    }
    return prevNode
}
