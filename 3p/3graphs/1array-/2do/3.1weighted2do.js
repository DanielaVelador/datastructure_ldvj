//
// dcomplab exercise
// complete graph as matrix
//

//
//
//

let undirected = [
  [0, 2, 5, 7],
  [2, 0, 8, 3],
  [5, 8, 0, 1],
  [7, 3, 1, 0]
]
let i, j;
let n = '';
for (i = 0; i < undirected.length; i++) {
  for (j = 0; j < undirected.length; j++) {
    n = n + undirected[i][j] + ',';
  }
  console.log(n)
  n = ''
}