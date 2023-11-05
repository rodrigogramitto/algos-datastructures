
let Node = function(val) {
  let newNode = {};
  newNode.val = val;
  newNode.next = null;
  newNode.prev = null;

  return newNode;
}

let LinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;
  extend(list, LinkedList.methods)
  return list
}

LinkedList.methods = {
  push: function(val) {
   let newNode = Node(val);
   if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
   } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
   }
   this.length++;
   return this;
  },

  pop: function() {
    if (!this.tail) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  },

  shift: function() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  },

  unshift: function(val) {
    if (!this.head) return this.push(val);
    let newNode = Node(val);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  },

  get: function(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
        count = this.length - 1;
        current = this.tail;
        while (count !== index) {
          current = current.prev;
          count--
        }
      }
    return current;
  },

  set: function(index, val) {
    let node = this.get(index);

    if (node) {
      node.val = val;
    return true;
    }
    return false;
  },

  insert: function(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return truel
  },

  remove: function(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  },

}

