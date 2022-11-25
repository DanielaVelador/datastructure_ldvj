//Cortés López Alejandra Guadalupe 
//Hernández Velasco Lehi Alejandro
//Solís Ochoa Luis Daniel
//Trujillo Rivera Javier Alejandro
//Velador Jiménez Laura Daniela
//
// your undirected graph solution here
//

import { grafo } from '../../../ldvj/linked/Graphs/clase.js'

var graph = new grafo(5)
graph.addEdge(1, 2)
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

graph.showGraph()

graph.dfs(0)