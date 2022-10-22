export { Linked, Node }
import Node from './node.js'
function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}


function getHead() {
  return this.head
}
function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises 1/2do
//
function contains(v) {
  let c = this.head
  let encontrar = false;

  while (c) {//exists
    if (v == c.data) {
      encontrar = c.data
    }
    c = c.next
  }
  return encontrar

}
function getTail() {
  let c = this.head
  var cola = ""
  while (c) {
    cola = c.data
    c = c.next
  }
  return cola
}
//Metodos nuevos
function InsertAfter(n, e) {
  let c = this.head
  let direcciones;
  while (c) {//exists
    if (e == c.data) {
      direcciones = c.next
      c.next = n
      n.next = direcciones
    }
    c = c.next
  }
}
function InsertBefore(n, e) {
  let c = this.head
  let obj_ant, direcciones
  if (c.next == null) {
    this.prepend(n)
  } else {
    if (e != this.head.data) {
      while (c) {//exists
        if (e != c.data) {
          obj_ant = c
        } else {
          direcciones = obj_ant.next
          obj_ant.next = n
          n.next = direcciones
        }
        c = c.next
      }
    } else {
      this.prepend(o)
    }
  }
}