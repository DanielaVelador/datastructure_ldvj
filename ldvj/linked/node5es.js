export { Linked, Node }
import Node from './node.js'
function Linked(n) {
  this.head = n
  this.tail = n
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
function prepend(n) {
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {
  n.next = null
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {
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

  while (c) {
    if (v == c.data) {
      encontrar = c.data
    }c = c.next
  }return encontrar
}

function getTail() {
  let c = this.head
  var cola = ""
  while (c) {
    cola = c.data
    c = c.next
  }return cola
}

function InsertAfter(n, e) {
  let c = this.head
  let direcciones;
  while (c) {
    if (e == c.data) {
      direcciones = c.next
      c.next = n
      n.next = direcciones
    }
    c = c.next
  }
}

function InsertBefore(n, e) {
  let a = this.head
  let before, direcciones
  if (a.next == null) {
    this.prepend(n)
  } else {
    if (e != this.head.data) {
      while (a) {
        if (e != a.data) {
          before = a
        } else {
          direcciones = before.next
          before.next = n
          n.next = direcciones
        }
        a = a.next
      }
    } else {
      this.prepend(o)
    }
  }
}