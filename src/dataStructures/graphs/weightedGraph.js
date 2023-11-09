const Graph = function() {
  this.adjacencyList =  {};
};

Graph.prototype.addVertex = function(name) {
  if (!this.adjacencyList[name]) {
    this.adjacencyList[name] = [];
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(v1, v2, weigth) {
  this.adjacencyList[v1].push({node: v2, weigth});
  this.adjacencyList[v2].push({node: v1, weigth});
}

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

module.exports = Graph;

