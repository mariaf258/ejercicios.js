// 1. map()
// El método map() itera sobre un array, aplica una función a cada uno de sus elementos y devuelve un nuevo array con los resultados. No modifica el array original.

// const numeros = [1, 2, 3, 4];
// const dobles = numeros.map(num => num * 2);
// console.log(dobles);  // [2, 4, 6, 8]



// 2. pop()
//  El método pop() elimina el último elemento de un array y lo devuelve. Modifica el array original.

// const frutas = ['manzana', 'plátano', 'naranja'];
// const ultimaFruta = frutas.pop();
// console.log(ultimaFruta);  // "naranja"
// console.log(frutas);  // ['manzana', 'plátano']



// 3. push()
// El método push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array. Modifica el array original.

// const frutas = ['manzana', 'plátano'];
// frutas.push('naranja');
// console.log(frutas);  // ['manzana', 'plátano', 'naranja']



// 4. filter()
// El método filter() crea un nuevo array con todos los elementos que cumplan con una condición proporcionada por una función. No modifica el array original.

// const numeros = [1, 2, 3, 4, 5];
// const pares = numeros.filter(num => num % 2 === 0);
// console.log(pares);  // [2, 4]



// 5. reduce()
// El método reduce() aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducir el array a un solo valor.

// const numeros = [1, 2, 3, 4];
// const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
// console.log(suma);  // 10



// 6. sort()
// El método sort() ordena los elementos de un array in place (modifica el array original) y devuelve el array ordenado. Por defecto, convierte los elementos a strings y los compara en orden lexicográfico (alfabético), pero se puede proporcionar una función de comparación para un orden personalizado.

// const numeros = [10, 5, 8, 1];
// numeros.sort((a, b) => a - b);  // Orden ascendente
// console.log(numeros);  // [1, 5, 8, 10]

