const hash = require('./hashFunction.js');

const HashTable = function(size = 53) {
  this.keyMap = new Array(size);
};

HashTable.prototype.set = function(key, value) {
  let hashed = hash(key, 5);
  let bucket = this.keyMap[hashed];

  if (!bucket) {
    this.keyMap[hashed] = [[key, value]];
  } else {
    bucket.push([key, value]);
  }
}

HashTable.prototype.get = function(key) {
  let hash = hash(key);
  let bucket = this.keyMap[hash];

  if (!bucket) return undefined;
  if (bucket.length === 1) return bucket[0];

  for (let el of bucket) {
    if (key === el[0]) return el;
  }
  return undefined;
}

const myMap = new HashTable(5);

myMap.set('blue', "23011");

