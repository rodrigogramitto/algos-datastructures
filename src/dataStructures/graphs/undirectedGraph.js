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
  delete this.adjacencyList[vertex];
};

Graph.prototype.depthFirstRecursive = function(node) {
  let results = [];
  let visited = {};
  let adjacencyList = this.adjacencyList;

    let dfs = (vertex) => {
      if (!vertex) return;

      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    }
    dfs(node);

  return results;
}

Graph.prototype.depthFirstIterative = function(node) {
  let results = [];
  let s = [];
  let visited = {};
  s.push(node);

    while(s.length) {
      let vertex = s.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);
        this.adjacencyList[vertex].forEach(neighbor => {
          s.push(neighbor);
        })
      }
    }

  return results;
}


Graph.prototype.bfs = function(node) {
  let [results, visited, q] = [[], {}, [node]];
  visited[node] = true;
    while(q.length) {
      let vertex = q.shift();
      results.push(vertex);
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            q.push(neighbor);
          }
        })
    }
    return results;
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
let actual1 = g.depthFirstRecursive("A")
let actual2 = g.depthFirstIterative("A");
let actual3 = g.bfs("A");
console.log(actual1);
console.log(actual2);
console.log(actual3);