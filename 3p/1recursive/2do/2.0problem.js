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
console.log("Secuencia Fibonacci")
fib(5)

//Potencias
function power(x, n) {
  var r = 1;
  if (n === 0) {
    return r
  }
  r = x
  r = r * power(x, n - 1)
  return r
}
console.log("Potencias")
console.log(power(2, 3))

//Factoriales
function factorial(x) {
  if (x === 0 || x === 1)
    return 1
  else if (x < 0)
    return "Not Valid Value"
  let fact = x
  fact = fact * factorial(x - 1)
  return fact
}
console.log("Factoriales")
console.log(factorial(3))