
const array = ["azul", "amarillo", "verde", "morado", "negro"];
console.log("azul,", "amarillo,", "verde,", "morado,", "negro");

// array.length = array.length -1;
// array.pop();
// array[array.length] = "rojo";


// for(let i = 0; i < array.length; i++){
//     array[i] = array[i + 1];
// }
// array.length--;
// array.shift();


// for(let i = array.length; i > 0; i--){
//     array[i] = array[i - 1];
// }


// const indice = 1;
// for(let i = indice; i < array.length - 1; i++){
//     array[i] = array[i + 1];
// }
// array.length--;


// const indice = 1;
// const elementosABorrar = 2;
// for(let i = indice; i < array.length - elementosABorrar; i++){
//     array[i] = array[i + elementosABorrar];
// }
// array.length = array.length - elementosABorrar;


// const indice = 1;
// const elementosABorrar =1;
// array.splice(indice, elementosABorrar);


array.forEach(item => console.log(item));


// const arrayCopiado = [];

// for(let i = 0; i < array.length; i++){
//     arrayCopiado.push(array[i] + " A");
// }

// const arrayCopiado = array.map(item => item +  " A");

// console.log(arrayCopiado);


// console.log(array);


// const arrayFiltrado = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === "azul") {
//         arrayFiltrado.push(array[i]);
//     }
// }

// console.log(arrayFiltrado);



// const frutas = [
//     "🍎", // manzana
//     "🍌", // banana
//     "🍊", // naranja
//     "🍉", // sandía
//     "🍇", // uvas
//     "🍓", // fresa
//     "🍈", // melón
//     "🍍", // piña
//     "🥭", // mango
//     "🍋", // limón
//     "🍏", // manzana verde
//     "🍒", // cereza
//     "🥝", // kiwi
//     "🍑", // durazno
//     "🍅",  // tomate
//     "🍇",
//     "🍇",
//     "🍇",
//     "🍇"
// ];

// const indice = 1;
// const elementosABorrar = 10; 
// frutas.splice(indice, elementosABorrar);

// const frutasFiltrado = [];
// for (let i = 0; i < frutas.length; i++){
//     if (frutas[i] === "🍇"){
//         frutasFiltrado.push(frutas[i]);
//     }
// }


// const frutasFiltrado = frutas.filter(item => item === "🍇");

// console.log(frutasFiltrado);
// console.log(frutas);


// const valorBuscado = "🍇";
// let elementoEncontrado = frutas.find(item => item === valorBuscado);

// console.log(elementoEncontrado);


function verificarNumeros(arr: number[]): string[] {
    return arr.map((N) => {
      if (N === 0) {
        return "PAR"; // El número 0 no es positivo ni negativo, pero es par
      } else if (N % 2 === 0) {
        return N > 0 ? "PAR POSITIVO" : "PAR NEGATIVO";
      } else {
        return N > 0 ? "IMPAR POSITIVO" : "IMPAR NEGATIVO";
      }
    });
  }
  
  // Ejemplos de uso:
  const numeros = [5, -4, 0, -7];
  const resultados = verificarNumeros(numeros);
  
  console.log(resultados); 
  // Resultado: ["IMPAR POSITIVO", "PAR NEGATIVO", "PAR", "IMPAR NEGATIVO"]