// Implementation for linked list

var Node =  function(val) {
  this.val = val;
  this.next = null;
};

var List = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

List.prototype.push  = function(val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
  return this;
}

List.prototype.pop = function() {
  if (!this.head) return undefined;
  let current = this.head;
  let prev = current;

  while (current.next) {
    prev = current;
    current = current.next;
  };
  this.tail = prev;
  this.tail.next = null;
  this.length--;
  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return current;
}

List.prototype.shift = function() {
  if (!this.head) return undefined;
  let temp = this.head;
  this.head = this.head.next;
  this.length--;
  if (this.length === 0) {
    this.tail = null;
  }
  return temp;
}

List.prototype.unshift = function(val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this
}

List.prototype.get = function(index) {
  if (index >= this.length || index < 0) return null;
  let counter = 1;
  let current = this.head;
  while (counter < index) {
    current = current.next;
    counter++;
  }
  return current;
};

List.prototype.set = function(val, index){
  let node = this.get(index);

  if (!node) {
    return false;
  } else {
    node.val = val;
    return true;
  }
}

List.prototype.insert = function(val, index) {
  if (index < 0 || index > this.length) return false;
  if (index === this.length) {
    this.push(val)
  }
  if (index === 0) {
    this.unshift(val);
  }
  let newNode = new Node(val);
  let previous = this.get(index - 1);
  let temp = previous.next;
  previous.next = newNode;
  newNode.next = temp;
  this.length++;
  return true;
}

List.prototype.remove = function(index) {
  if (index < 0 || index >= this.length) return undefined;
  if (index === this.length - 1) return this.pop();
  if (index === 0) return this.shift();

  let previous = this.get(index - 1);
  let removed = previous.next;
  previous.next = previous.next.next;
  this.length--;
  return removed;
}

List.prototype.reverse = function() {
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let [next, prev] = [undefined, null];

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}

let myList = new List();

myList.push('rodrigo');
myList.push('gramitto')
let last = myList.pop()
// console.log(myList.tail);
// console.log(last, myList.length);

myList.push('alberto');
myList.push('giancarlo');
myList.push('escalona');
myList.push('pietro');

let fourth = myList.get(4) // expect 'excalona'

let set = myList.set('Jimmy', 4);
let shift = myList.shift();
// console.log(shift, myList.head);
