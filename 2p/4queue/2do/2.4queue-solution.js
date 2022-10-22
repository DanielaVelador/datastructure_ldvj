function cola() {
  this.Tamaño_Cola = []
  this.max = 5
  this.entrada = entrada
  this.salida = salida
  this.llena = llena
  this.vacia = vacia
  this.mostrar = mostrar
}


function entrada(element) {
  if (this.llena()) {
    console.log("Tu fila esta llena, debes eliminar elementos")
  }
  else {
    this.Tamaño_Cola.push(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("Tu fila esta vacia, debes introducir elementos")
  }
  else {
    this.Tamaño_Cola.shift()
  }
}

function llena() {
  if (this.Tamaño_Cola.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_Cola.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let show = ""
  for (let i = 0; i < this.Tamaño_Cola.length; ++i) {
    show += this.Tamaño_Cola[i] + "\n"
  }
  return show
}

let prueba = new cola();

prueba.entrada("Lehi")
prueba.entrada("Fernando")
prueba.entrada("Lupian")
prueba.entrada("Javier")
prueba.entrada("Daniela")
console.log(prueba.mostrar())
prueba.entrada("Daniel")
prueba.salida()
prueba.salida()
prueba.salida()
prueba.salida()
prueba.salida()
prueba.salida()