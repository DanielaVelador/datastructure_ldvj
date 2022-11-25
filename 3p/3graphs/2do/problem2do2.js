//Cortés López Alejandra Guadalupe 
//Hernández Velasco Lehi Alejandro
//Solís Ochoa Luis Daniel
//Trujillo Rivera Javier Alejandro
//Velador Jiménez Laura Daniela
//
// your solution here
//
// pick one:
// digraph
//


import { grafo } from '../../../ldvj/linked/Graphs/clase2.js'

var graph = new grafo(5)
graph.addEdge(1, 2)
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

graph.showGraph()

graph.dfs(0)