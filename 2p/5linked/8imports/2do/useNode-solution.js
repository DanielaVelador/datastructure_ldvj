import { Linked, Node } from '../../../../ldvj/linked/node5es.js'

let n1 = new Node('a')
let n2 = new Node('b')

let lista = new Linked(n1)
lista.append(n2)
lista.append(new Node('c'))
lista.traverse(lista.getHead())

lista.InsertAfter(new Node('f'), 'b')
lista.traverse(lista.getHead())

lista.InsertBefore(new Node('e'), 'b')
lista.traverse(lista.getHead())