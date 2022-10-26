var steps = []
var time = []
function queue(maximo) {
  this.size = [];
  this.max = maximo;
  this.full = full;
  this.empty = empty;
  this.entrada = entrada;
  this.salida = salida;
  this.mostrar = mostrar;
  this.peek = peek;
}
function entrada(element) {
  if (this.full()) {
    console.log("¡Fila llena!")
    } else {
    this.size.push(element)
  }
}

function salida() {
  if (this.empty()) {
    console.log("¡Fila vacía!")
    } else {
    return this.size.shift()
  }
}

function full() {
  if (this.size.length === this.max){
    return true    
  } else {
    return false
  }
}

function empty() {
  if (this.size.length === 0){
    return true
  }else {
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

function queuesorting(x) {
  let pasos = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()
    let f = new queue(x);
    let q = new queue(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    f.entrada(n)
    while (i < x) {
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (f.empty() != true) {
        q.entrada(f.salida())
        pasos++
      }
      while (r > q.peek()) {
        f.entrada(q.salida())
        pasos++
      }
      if (q.empty()) {
        f.entrada(r)
        pasos++
      }
      if (r <= q.peek()) {
        f.entrada(r)
        pasos++
      }
      while (q.empty() != true) {
        f.entrada(q.salida())
      }
      i++
    }
    steps[j - 1] = pasos;
    console.log(f.mostrar())
    console.log("Pasos de la ejecución  #"+ j + " de " + x + " números aleatorios: " + pasos)
    var end = Date.now()
    time[j - 1] = end - start
    console.log("Tiempo de la ejecución #"+ j + " de " + x + " numeros aleatorios: " + time[j - 1] + "s")
    pasos = 0
  }
}

queuesorting(10)
steps[5] = (steps[0] + steps[1] + steps[2] + steps[3] + steps[4])/5
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])/5
console.log("Results of sorting 10 random numbers 5 times")
console.log("Promedio de pasos: " + steps[5])
console.log("Promedio de tiempo: " + time[5] + "s")

queuesorting(100)
steps[5] = (steps[0] + steps[1] + steps[2] + steps[3] + steps[4])/5
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])/5
console.log("Results of sorting 100 random numbers 5 times")
console.log("Promedio de pasos: " + steps[5])
console.log("Promedio de tiempo: " + time[5] + "s")

queuesorting(1000)
steps[5] = (steps[0] + steps[1] + steps[2] + steps[3] + steps[4])/5
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])/5
console.log("Results of sorting 1000 random numbers 5 times")
console.log("Promedio de pasos: " + steps[5])
console.log("Promedio de tiempo: " + time[5] + "s")