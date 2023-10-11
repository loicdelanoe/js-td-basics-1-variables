// Permutation de variables

let a = 1;
let b = 2;
let c;

c = a;
a = b;
b = c;

let d = 1;
let e = 2;
[d, e] = [e, d]

console.log(d, e);


// Solution classique utilisant une variable temporaire



// Solution alternative valable uniquement pour des nombres
/* nombre1 += nombre2;
nombre2 = nombre1 - nombre2;
nombre1 -= nombre2; */


