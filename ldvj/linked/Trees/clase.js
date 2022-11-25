//Cortés López Alejandra Guadalupe 
//Hernández Velasco Lehi Alejandro
//Solís Ochoa Luis Daniel
//Trujillo Rivera Javier Alejandro
//Velador Jiménez Laura Daniela

export { Hoja, Arbol }
function Arbol() {
  this.Insert = Insert,
    this.traverse = traverse,
    this.remove = remove,
    this.search = search
}
function Hoja(n) {
  this.root = n,
    this.Left = null,
    this.Right = null
}
function traverse(x) {
  if (x !== null) {
    console.log(x.root)
    traverse(x.Left)
    traverse(x.Right)
  }
}
function Insert(t, r, b) {
  if (t !== null) {
    if (t.root === r) {
      if (t.Left === null) {
        t.Left = b
      } else if (t.Right === null) {
        t.Right = b
      } else {
        console.log("No se pueden introducir mas valores")
      }
    } else {
      Insert(t.Left, r, b)
      Insert(t.Right, r, b)
    }
  }
}
function remove(x, n) {
  if (x !== null) {
    if (x.root === n) {
      x.Left = null
      x.Right = null
      x.root = null
    } else {
      remove(x.Left, n)
      remove(x.Right, n)
    }
  }
}
function search(x, n) {
  if (x !== null) {
    if (x.root === n) {
      console.log('Se encontro la hoja: ' + x.root)
    } else {
      search(x.Left, n)
      search(x.Right, n)
    }
  }
}