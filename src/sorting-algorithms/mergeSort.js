// Sorts array by exploiting the concept that 1 or less number arrays are sorted.
//Breaks array down into smaller arrays and merges them


let merge = (arr1, arr2) => {
  let [i, j] = [0, 0];
  let merged = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++
    }
  };

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++
  };
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++
  }

  return merged;
}

let sort = (arr) => {

  // base case -> arr len is smaller than one -> return arr
  if (arr.length <= 1) return arr;

  // recursive case
  let mid = Math.floor((arr.length / 2));
    // call sort on left and right
  let left = sort(arr.slice(0, mid));
  let right = sort(arr.slice(mid, arr.length))
    // return merge left and right
    return merge(left, right);
}

let nums = [22,512,11,8,6,7,5,3,0,9];
let actual = sort(nums);

console.log(actual);