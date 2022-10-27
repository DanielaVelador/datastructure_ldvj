var steps = []
var time = []
function Stack(maximo) {
  this.size = []
  this.max = maximo
  this.full = full
  this.empty = empty
  this.entrada = entrada
  this.salida = salida
  this.mostrar = mostrar
  this.peek = peek
}

function entrada(element) {
  if (this.full()) {
    console.log("¡Pila llena!")
  } else {
    this.size.unshift(element)
  }
}

function salida() {
  if (this.empty()) {
    console.log("¡Pila vacía!")
  }
  else {
    return this.size.shift()
  }
}

function full() {
  if (this.size.length === this.max){
   return true 
  } else{
    return false
  }
}

function empty() {
  if (this.size.length === 0){
    return true
  } else {
    return false
  }
}

function mostrar() {
  let show = ""
  for (let i = 0; i < this.size.length; ++i) {
    show += this.size[i] + "\n"
  }
  return show
}

function peek() {
  return this.size[0]
}

function stacksorting(x) {
  let pasos = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()
    let p = new Stack(x);
    let s = new Stack(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    p.entrada(n)
    while (i < x) {
      while (s.empty() != true) {
        p.entrada(s.salida())
        pasos++
      }
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (r <= p.peek() && p.empty() != true) {
        s.entrada(p.salida())
        pasos++
      }
      if (r >= p.peek() || p.empty()) {
        p.entrada(r)
        pasos++
      }
      i++
    } while (!s.empty()) {
      p.entrada(s.salida())
    }
    steps[j - 1] = pasos;
    console.log(p.mostrar())
    console.log("Pasos de la ejecución #"+ j + " de " + x + " números aleatorios: " + pasos)
    var end = Date.now()
    time[j - 1] = end - start
    console.log("Tiempo de la ejecución #"+ j + " de " + x + " números aleatorios son: " + time[j - 1] + "s")
    pasos = 0
  }
}

stacksorting(10) //change to 10,100 or 1000  
steps[5] = (steps[0] + steps[1] + steps[2] + steps[3] + steps[4])/5
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])/5
console.log("Results of sorting random numbers 5 times")
console.log("El promedio de pasos totales es: " + steps[5])
console.log("El promedio de tiempo total es: " + time[5] + "s")