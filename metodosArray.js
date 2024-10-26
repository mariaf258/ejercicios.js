// 1. map()
// El método map() itera sobre un array, aplica una función a cada uno de sus elementos y devuelve un nuevo array con los resultados. 
// No modifica el array original.

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
// El método filter() crea un nuevo array con todos los elementos que cumplan con una condición proporcionada por una función. 
// No modifica el array original.

// const numeros = [1, 2, 3, 4, 5];
// const pares = numeros.filter(num => num % 2 === 0);
// console.log(pares);  // [2, 4]



// 5. reduce()
// El método reduce() aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducir el array a un solo valor.

// const numeros = [1, 2, 3, 4];
// const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
// console.log(suma);  // 10



// 6. sort()
// El método sort() ordena los elementos de un array in place (modifica el array original) y devuelve el array ordenado. 
// Por defecto, convierte los elementos a strings y los compara en orden lexicográfico (alfabético), pero se puede proporcionar una función de comparación para un orden personalizado.

// const numeros = [10, 5, 8, 1];
// numeros.sort((a, b) => a - b);  // Orden ascendente
// console.log(numeros);  // [1, 5, 8, 10]



//  7. slice()
// se utiliza para crear una copia superficial de una parte de un array, sin modificar el array original. 
// Este método permite seleccionar elementos desde una posición de inicio hasta una posición final (sin incluirla).

// const frutas = ["manzana", "banana", "mango", "naranja", "fresa"];
// const seleccion = frutas.slice(1, 4);

// console.log(seleccion);  // ["banana", "mango", "naranja"]
// console.log(frutas);     // ["manzana", "banana", "mango", "naranja", "fresa"] (sin cambios)

// Ejemplo con índices negativos:
// const numeros = [1, 2, 3, 4, 5];
// const resultado = numeros.slice(-3, -1);

// console.log(resultado);  // [3, 4]



// 8. trim()
// se usa para eliminar espacios en blanco al principio y al final de una cadena. No afecta a los espacios dentro de la cadena.

// const saludo = "   Hola, mundo!   ";
// const saludoSinEspacios = saludo.trim();

// console.log(saludoSinEspacios); // "Hola, mundo!"



// 9. toLowerCase()
// convierte todos los caracteres de una cadena a minúsculas. Esto es útil para comparaciones de cadenas sin importar mayúsculas o minúsculas.

// const texto = "JavaScript ES GENIAL";
// const textoMinusculas = texto.toLowerCase();

// console.log(textoMinusculas); // "javascript es genial"



// 10. forEach()
// se usa en arrays para ejecutar una función específica una vez por cada elemento del array. 

// const numeros = [1, 2, 3, 4];

// numeros.forEach((numero) => {
//   console.log(numero * 2); // Muestra 2, 4, 6, 8
// });



// 11. toUpperCase()
// se utiliza para convertir todos los caracteres de una cadena a mayúsculas. 
// Es especialmente útil cuando quieres estandarizar el formato de texto.

const texto = "hola mundo";
const textoEnMayusculas = texto.toUpperCase();
console.log(textoEnMayusculas); // Muestra "HOLA MUNDO"
