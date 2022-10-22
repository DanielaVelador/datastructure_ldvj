import { Linked, Node } from '../../../../ldvj/linked/node5es.js'

let n1 = new Node(1)
let n2 = new Node(2)

let lista = new Linked(n1)
lista.append(n2)
lista.append(new Node(3))

lista.traverse(lista.getHead())

console.log(lista.contains(5))
console.log(lista.getTail())