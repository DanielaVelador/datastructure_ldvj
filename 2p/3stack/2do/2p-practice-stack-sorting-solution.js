var pt = []
var tt = []
function pila(maximo) {
  this.Tamaño_Pila = []
  this.max = maximo
  this.llena = llena
  this.vacia = vacia
  this.entrada = entrada
  this.salida = salida
  this.mostrar = mostrar
  this.peek = peek
}

function entrada(element) {
  if (this.llena()) {
    console.log("Tu pila esta llena, debes eliminar elementos")
  } else {
    this.Tamaño_Pila.unshift(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("Tu pila esta vacia, debes introducir elementos")
  }
  else {
    return this.Tamaño_Pila.shift()
  }
}

function llena() {
  if (this.Tamaño_Pila.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_Pila.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let show = ""
  for (let i = 0; i < this.Tamaño_Pila.length; ++i) {
    show += this.Tamaño_Pila[i] + "\n"
  }
  return show
}

function peek() {
  return this.Tamaño_Pila[0]
}

function ord_pila(x) {
  let pasos = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()
    let p = new pila(x);
    let s = new pila(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    p.entrada(n)
    while (i < x) {
      while (s.vacia() != true) {
        p.entrada(s.salida())
        pasos++
      }
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (r <= p.peek() && p.vacia() != true) {
        s.entrada(p.salida())
        pasos++
      }
      if (r >= p.peek() || p.vacia()) {
        p.entrada(r)
        pasos++
      }
      i++
    }
    while (!s.vacia()) {
      p.entrada(s.salida())
    }
    pt[j - 1] = pasos;
    console.log(p.mostrar())
    console.log("Los pasos en el ciclo " + j + " de " + x + " numeros aleatorios son: " + pasos)
    var end = Date.now()
    tt[j - 1] = end - start
    console.log("El tiempo requerido en el ciclo " + j + " de " + x + " numeros aleatorios son: " + tt[j - 1] + "s")
    pasos = 0
  }
}
ord_pila(10)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("El promedio de pasos totales es: " + pt[5])
console.log("Total de Pasos: " + pt[6])
console.log("El promedio de tiempo total es: " + tt[5] + "s")
console.log("Total de tiempo: " + tt[6] + "s")
console.log("----5 veces 10----")
//-------------------------------------------------------------
ord_pila(100)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("El promedio de pasos totales es: " + pt[5])
console.log("Total de Pasos: " + pt[6])
console.log("El promedio de tiempo total es: " + tt[5] + "s")
console.log("Total de tiempo: " + tt[6] + "s")
console.log("----5 veces 100----")
//-------------------------------------------------------------
ord_pila(1000)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("El promedio de pasos totales es: " + pt[5])
console.log("Total de Pasos: " + pt[6])
console.log("El promedio de tiempo total es: " + tt[5] + "s")
console.log("Total de tiempo: " + tt[6] + "s")
console.log("----5 veces 1000----")