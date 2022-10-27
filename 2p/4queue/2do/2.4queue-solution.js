function queue() {
    this.dataStore = []
    this.top = 5

    this.enqueue= function(element) {
      if(this.full()){
        console.log("¡Fila llena!")
      }
      else{this.dataStore.push(element)
      }
    }

    this.dequeue= function() {
      if(this.empty()){
        console.log("¡Fila vacía!")
      }
      else{
        return this.dataStore.shift()
      }
    }

    this.front= function() {
	return this.dataStore[0]
    }

    this.back= function() {
	return this.dataStore[this.dataStore.length-1]
    }

    this.toString= function() {
	let a = ""
	for (let i = 0; i < this.dataStore.length; ++i) {
	    a += this.dataStore[i] + "\n"
	}
	return a
    }

    this.empty= function() {
	if (this.dataStore.length == 0)
	    return true	
	else 
	    return false
    }

    this.full= function() {
      if (this.dataStore.length == this.top)
	      return true	
	    else 
	      return false
    }
}

//testing
let tq = new queue()
tq.enqueue("Maddie")
tq.enqueue("Mackenzie")
tq.enqueue("Kendall")
tq.enqueue("Nia")
tq.enqueue("Kalani")

console.log(tq.toString())
console.log("Front: " + tq.front())
console.log("Back: " + tq.back())

tq.dequeue()
tq.dequeue()
tq.dequeue()
tq.dequeue()
tq.dequeue()
console.log(tq.toString())