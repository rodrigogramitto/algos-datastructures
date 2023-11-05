
const maxBinaryHeap = function () {
  this.values = [];
};

maxBinaryHeap.prototype.bubbleUp = function () {
  let index = this.values.length - 1;

  while (index > 0) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.values[index] <= this.values[parentIndex]) break;
    [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]]
    index = parentIndex;
  }
};

maxBinaryHeap.prototype.insert = function (val) {
  this.values.push(val);
  this.bubbleUp();
};

maxBinaryHeap.prototype.extractMax = function () {

  [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
  let removed = this.values.pop();
  if (this.values.length > 1) this.bubbleDown();
  return removed;
}

maxBinaryHeap.prototype.bubbleDown = function() {
  let pIndex = 0;
  while (pIndex < this.values.length) {
    let el = this.values[pIndex]
    let [lIndex, rIndex] = [(2 * pIndex) + 1, (2 * pIndex) + 2]
    let [lVal, rVal] = [this.values[lIndex], this.values[rIndex]];
    if (el > lVal && el > rVal) break;
    if (!lVal && !rVal) break;
    if (lVal > rVal) {
      [this.values[pIndex], this.values[lIndex]] = [this.values[lIndex], this.values[pIndex]];
      pIndex = lIndex;
    } else {
      [this.values[pIndex], this.values[rIndex]] = [this.values[rIndex], this.values[pIndex]];
      pIndex = rIndex;
    }
  }
}

let myHeap = new maxBinaryHeap();
myHeap.insert(10);
myHeap.insert(20);
myHeap.insert(30);
myHeap.insert(44);
myHeap.insert(1);
myHeap.insert(23);
myHeap.insert(5);

console.log(myHeap.values);
console.log(myHeap.extractMax());
console.log(myHeap.values);