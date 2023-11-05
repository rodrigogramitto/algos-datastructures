const Queue = function() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

const Node = function(val) {
  this.value = val;
  this.next = null;
}

Queue.prototype.enqueue = function(val) {
  // add to end
  let newNode = new Node(val);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode
  } else {
    let temp = this.last;
    this.last = newNode;
    temp.next = newNode;
  }

  return ++this.size;
}

Queue.prototype.dequeue = function() {
  // remove from beginning
  let temp = this.first;
  if (this.size === 0) return null;
  if (this.first === this.last) {
    this.first = null;
    this.last = null;
  }
  this.first = this.first.next;

  this.size--;
  temp.next = null;
  return temp;
}

