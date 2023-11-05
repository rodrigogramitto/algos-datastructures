function PriorityQueue() {
  this.values = [];
}

function Node(val, priority) {
  this.val = val;
  this.priority = priority;
}

PriorityQueue.prototype.bubbleUp = function () {
  let index = this.values.length - 1;

  while (index > 0) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.values[index].priority >= this.values[parentIndex].priority) break;
    [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
    index = parentIndex;
  }
};

PriorityQueue.prototype.enqueue = function (val, priority) {
  let newNode = new Node(val, priority);
  this.values.push(newNode);
  this.bubbleUp();
};

PriorityQueue.prototype.dequeue = function () {
  if (this.values.length === 0) return null;
  if (this.values.length === 1) return this.values.pop();

  [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
  let removed = this.values.pop();
  this.bubbleDown();
  return removed;
};

PriorityQueue.prototype.bubbleDown = function () {
  let pIndex = 0;

  while (pIndex < this.values.length) {
    let el = this.values[pIndex];
    let [lIndex, rIndex] = [2 * pIndex + 1, 2 * pIndex + 2];
    let [lPrio, rPrio] = [Infinity, Infinity]; // Initialize with Infinity to handle leaf nodes.

    if (lIndex < this.values.length) {
      lPrio = this.values[lIndex].priority;
    }

    if (rIndex < this.values.length) {
      rPrio = this.values[rIndex].priority;
    }

    if (el.priority <= lPrio && el.priority <= rPrio) break;

    if (lPrio < rPrio) {
      [this.values[pIndex], this.values[lIndex]] = [this.values[lIndex], this.values[pIndex]];
      pIndex = lIndex;
    } else {
      [this.values[pIndex], this.values[rIndex]] = [this.values[rIndex], this.values[pIndex]];
      pIndex = rIndex;
    }
  }
};