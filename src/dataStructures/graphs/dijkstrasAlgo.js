const Graph = require('./weightedGraph.js');

const PriorityQueue = function() {
  this.values = [];
  this.enqueue = (val, priority) => {
    this.values.push({val, priority});
    this.sort();
  };
  this.dequeue = () => {
    return this.values.shift();
  }
  this.sort = () => {
    this.values.sort((a, b) => a.priority - b.priority);
  };
};

Graph.prototype.Dijkstra = function(start, end) {
  const nodes = new PriorityQueue();
  const distances = {};
  const previous = {};
  let path = [];

  // Build up initial state
  for (let vertex in this.adjacencyList) {
     if (vertex === start) {
        distances[vertex] = 0; // Corrected the assignment
        nodes.enqueue(vertex, 0);
     } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
     }
     previous[vertex] = null;
  }

  let smallest;

  // As long as there is something to visit
  while (nodes.values.length) {
     smallest = nodes.dequeue().val;
     if (smallest === end) {
        while (previous[smallest]) {
           path.push(smallest);
           smallest = previous[smallest];
        }
        break;
     }

     if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
           // Find neighboring node
           let nextNode = this.adjacencyList[smallest][neighbor];
           // Calculate distance to neighboring node
           let candidate = distances[smallest] + nextNode.weight;

           if (candidate < distances[nextNode.node]) { // Corrected the object reference
              // Update the new smallest distance to the neighbor
              distances[nextNode.node] = candidate;
              // Update how we got to the neighbor
              previous[nextNode.node] = smallest; // Corrected the object reference
              nodes.enqueue(nextNode.node, candidate); // Corrected the object reference
           }
        }
     }
  }
  return path.concat(smallest).reverse();
}

var graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

let actual = graph.Dijkstra("A", "E");

console.log(actual);
