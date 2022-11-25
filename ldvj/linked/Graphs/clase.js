//Cortés López Alejandra Guadalupe 
//Hernández Velasco Lehi Alejandro
//Solís Ochoa Luis Daniel
//Trujillo Rivera Javier Alejandro
//Velador Jiménez Laura Daniela
export { grafo }
function grafo(v) {
  this.vertice = v;
  this.edges = 0;
  this.adj = [];
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (var i = 0; i < this.vertice; ++i) {
    this.adj[i] = [];
    this.adj[i].push("")
  }
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  if (v >= this.vertice || w >= this.vertice) {
    console.log('Necesita una matriz mas grande')
  } else {
    this.adj[v].push(w)
    this.adj[w].push(v);
    this.edges++
  }
}

function showGraph() {
  var putstr = ""

  for (var i = 0; i < this.vertice; ++i) {
    putstr = putstr + i + '->';
    for (var j = 0; j < this.vertice; ++j) {
      if (this.adj[i][j] != undefined) {
        putstr = putstr + this.adj[i][j] + ' ';
      }
    }
    putstr = putstr + '\n'
  }
  console.log(putstr);
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log("Visited vertex: " + v);
  }
  for (var w in this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
}