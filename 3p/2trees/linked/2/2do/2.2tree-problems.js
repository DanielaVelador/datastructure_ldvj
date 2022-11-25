function Node(o) {
  this.d = o
  this.l = null
  this.r = null
}
function preorder(n) {
  if (n) {
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}
function inorder(n) {
  if (n) {
    preorder(n.l)
    console.log(n.d)
    preorder(n.r)
  }
}
function posorder(n) {
  if (n) {
    preorder(n.l)
    preorder(n.r)
    console.log(n.d)
  }
}
///////////////////////////////////////////////////
function preorder2(n) {
  if (n) {
    console.log(n.d)
    preorder(n.r)
    preorder(n.l)
  }
}
function inorder2(n) {
  if (n) {
    preorder(n.r)
    console.log(n.d)
    preorder(n.l)
  }
}
function posorder2(n) {
  if (n) {
    preorder(n.r)
    preorder(n.l)
    console.log(n.d)
  }
}


///////////////////////////////////////////////////
let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node('/')
p.l = o1;
p.r = o2;
let q1 = new Node(2)
let q2 = new Node(7)
o2.l = new Node(2)
o2.r = new Node(7)

preorder(p)
inorder(p)
posorder(p)