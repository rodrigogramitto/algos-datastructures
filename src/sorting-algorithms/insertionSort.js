// Sorts data by gradually building a sorted left side, if data is almost sorted works really well;


let sort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    let current = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
};


let nums = [22,512,11,8,6,7,5,3,0,9];
let actual = sort(nums);

console.log(actual);