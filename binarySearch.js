
/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target){
  // your code here
  let start = 0;
  let end = arr.length - 1;

  while (start <= end){
    let mid = start + Math.floor((end-start)/2)

    if(target === arr[mid]) return mid

    if(target > arr[mid]){
      start = mid+1
    }else{
      end = mid - 1
    }
  }

  return -1
}
