//Cortés López Alejandra Guadalupe 
//Hernández Velasco Lehi Alejandro
//Solís Ochoa Luis Daniel
//Trujillo Rivera Javier Alejandro
//Velador Jiménez Laura Daniela
//
// your binary tree solution here
//
import { Arbol, Hoja } from '../../../ldvj/linked/Trees/clase.js'

let tree = new Arbol()
let sheet = new Hoja(1)

tree.Insert(sheet, 1, new Hoja(2))
tree.Insert(sheet, 1, new Hoja(3))
tree.Insert(sheet, 2, new Hoja(4))
tree.Insert(sheet, 2, new Hoja(5))
tree.Insert(sheet, 2, new Hoja(6))
tree.remove(sheet, 5)
tree.traverse(sheet)
tree.search(sheet, 2)