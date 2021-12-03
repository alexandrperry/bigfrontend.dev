class NodeStore {
  constructor() {
    this.map = {};
    this.nodeKey = Symbol('nodeKey'); 
    this.counter = 0;
  }
   /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    if(!node.dataset[this.nodeKey]) {
      node.dataset[this.nodeKey] = ++this.counter;
      this.map[this.counter] = value;
    } else {
      this.map[node.dataset[this.nodeKey]] = value;
    }
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
   return this.map[node.dataset[this.nodeKey]]
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return this.map.hasOwnProperty(node.dataset[this.nodeKey])
  }
}
