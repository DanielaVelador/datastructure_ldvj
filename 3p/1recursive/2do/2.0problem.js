//Serie Fibonacci
function fibonacci_rec(num) {
  if (num < 2) {
    return num;
  }
  else {
    return fibonacci_rec(num - 1) + fibonacci_rec(num - 2);
  }
}
function fib(n) {
  for (let i = 1; i <= n; i++) {
    console.log(fibonacci_rec(i));
  }
}
console.log("Secuencia de Fibonacci")
fib(5)

//Potencias
function power(a, b) {
  var r = 1;
  if (b === 0) {
    return r
  }
  r = a
  r = r * power(a, b - 1)
  return r
}
console.log("Potencias")
console.log(power(5, 5))

//Factoriales
function factorial(a) {
  if (a === 0 || a === 1)
    return 1
  else if (a < 0)
    return "Valor inválido"
  let fact = a
  fact = fact * factorial(a - 1)
  return fact
}
console.log("Factoriales")
console.log(factorial(11))