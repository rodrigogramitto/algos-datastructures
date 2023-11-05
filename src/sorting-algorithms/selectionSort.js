
let sort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let min = i;
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) swap(arr, i, min);
  }
  return arr;
};

let swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let nums = [22,512,11,8,6,7,5,3,0,9];
let actual = sort(nums);

console.log(actual);