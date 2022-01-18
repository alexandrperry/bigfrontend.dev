// complete the implementation
class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare - 
   * compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare) {
    this.compare = compare;
    this.data = []
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.data.length;
  }

  /**
   * returns the head element
   */
  peek() {
    return this.data[0]
  }

  getParent(index){
    return Math.floor(index / 2);
  }

  getChildren(index){
    let left = 2 * index + 1
    if(left >= this.size()){
      left = null
    }

    let right = 2 * index + 2
    if(right >= this.size()){
      right = null
    }

    if(left && right){
      return this.compare(this.data[left],this.data[right]) > 0 ? right : left
    }

    if(left){
      return left;
    }

    if(right){
      return right
    }
  }

  swap(i,j){
    [this.data[i],this.data[j]] = [this.data[j],this.data[i]]
  }
  
  moveUp(index){
    const parentIndex = this.getParent(index);

    if(this.compare(this.data[parentIndex],this.data[index])>0){
      this.swap(parentIndex,index)
      this.moveUp(parentIndex)
    }
  }

  moveDown(index){
    const childIndex = this.getChildren(index);

    if(this.compare(this.data[index],this.data[childIndex])>0){
      this.swap(index,childIndex)
      this.moveDown(childIndex)
    }
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
   this.data.push(element)
   if(this.size() !== 1){
     this.moveUp(this.size() - 1)
   }
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    if(this.size() <= 1) {
      return this.data.pop();
    }

    this.swap(0, this.size() - 1)
    const element = this.data.pop()

    this.moveDown(0)

    return element;

  }
}
