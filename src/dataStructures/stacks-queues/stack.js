const Node = function(val) {
  this.value = val;
  this.next = null;
}

const Stack = function() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

Stack.prototype.push = function(val) {
  let newNode = new Node(val);

  if (this.size < 1) {
    this.first = newNode;
    this.last = newNode;
  } else {
    let temp = this.first;
    this.first = newNode;
    newNode.next = temp;
  }

  this.size++;
  return this.size;
}

Stack.prototype.pop = function() {
  if (this.size === 0) return null;
  let node = this.first;

  if (this.size === 1) {
    this.first = null;
    this.last = null;
  } else {
    this.first = this.first.next;
  }
  this.size--;
  node.next = null;
  return node;
}