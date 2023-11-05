let Node = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

let bst = function() {
  this.root = null;
}

bst.prototype.insert = function(val) {
  let newNode = new Node(val);

  if (!this.root) {
    this.root = newNode;
    return this
  }
  let node = this.root;

  while (true) {
    if (newNode.value > node.value) {
      if (!node.right) {
        node.right = newNode
        return this;
      } else {
        node = node.right;
      }
    } else {
      if (!node.left) {
        node.left = newNode;
        return this;
      } else {
        node = node.left;
      }
    }
  }
}

bst.prototype.find = function(val) {
  let [found, current] = [false, this.root];
  if (!this.root) return null;
  if (current.value === val) {
    return current;
  }
  while (current && !found) {
    if (val < current.value) {
      current = current.left
    } else if (val > current.value) {
      current = current.right
    } else {
      found = true;
    }
  }
  if(!found) return undefined;
  return current;
}

bst.prototype.bfs = function() {
  let queue = [];
  let visited = [];

  queue.push(this.root);

  while (queue.length) {
    let node = queue.shift();
    visited.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return visited;
}

bst.prototype.dfs = function() {
  let visited = [];

  const traverse = (node) => {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(this.root);

  return visited;
}

bst.prototype.dfspost = function() {
  let visited = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.value);
  };
  traverse(this.root);
  return visited;
}

bst.prototype.dfsInOrder = function() {
  let visited = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    visited.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(this.root);

  return visited;
}

function maxSum(root) {
  if (!root) return 0;

  if (!root.left && !root.right) return root.value;
  return root.value += Math.max(maxSum(root.left), maxSum(root.right))
}


let myTree = new bst();

// myTree.insert(10);
// myTree.insert(6);
// myTree.insert(15);
// myTree.insert(3);
// myTree.insert(8);
// myTree.insert(20);
myTree.insert(5);
myTree.insert(4);
myTree.insert(-80);
myTree.insert(-90);
myTree.insert(10);
myTree.insert(-90);


var actual1 = maxSum(myTree.root);
console.log(actual1);
