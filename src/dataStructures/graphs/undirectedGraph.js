// This is a basic undirected graph class

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

Graph.prototype.addEdge = function(v1, v2) {
  this.adjacencyList[v1].push(v2);
  this.adjacencyList[v2].push(v1);
}

Graph.prototype.removeEdge = function(v1, v2) {
  this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2);
  this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1);
}

Graph.prototype.removeVertex = function(name) {
  while(this.adjacencyList[vertex].lneght) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(vertex, adjacentVertex);
  };
};

