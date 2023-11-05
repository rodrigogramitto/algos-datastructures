
let sort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
};

let swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let nums = [22,512,11,8,6,7,5,3,0,9];
let actual = sort(nums);

console.log(actual);