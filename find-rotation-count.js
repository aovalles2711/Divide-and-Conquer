function findRotationCount(arr, low = 0, high = arr.length - 1) {
  if (high < low) return 0;
  if (high === low) return low;
  let mid = math.floor((low + high) / 2)

  if (mid < high && arr[mid + 1] < arr[mid]) {
    return mid + 1;
    }
  
  if (arr[high] > arr[mid]) {
    return findRotationCount(arr, low, mid - 1);
  }

  return findRotationCount(arr, mid + 1, high);
}
module.exports = findRotationCount