// 1- funcion que me diga el nombre de la persona y la edad

// const nombre = 'Pedro';

// let edad = 20;

// console.log("Me llamo ", nombre, "y tengo ", edad, "años");



// 2- imprima los numeros del 1 al 100, pero que diga cuales son pares y cuales impares

// let numeros = 1;

// while (numeros <= 100){
//     console.log(numeros);
//     numeros++;

//     if (numeros % 2){
//         console.log("es par");
        
//     }else{
//         console.log("es impar");
//     }

// }



// 3- dado un numero de 4 digitos saber si es un numero capicua, de lo cotrario que imprima es un numero no capicua

//DIEGO

// let numero = 4314;
// let diego1 = numero % 10 
// numero = parseInt(numero / 10);
// let diego2 = numero % 10;
// numero = parseInt(numero / 10);
// let diego3 = numero % 10 
// numero = parseInt(numero / 10);
// let diego4 = numero % 10;
// numero = parseInt(numero / 10);
// console.log(diego1, diego2, diego3, diego4);

// if (diego1 === diego4 && diego2 === diego3) {
//     console.log("Es capicúa");
// } else {
//     console.log("No es capicúa");
// }



//JHONNY 

// let numeroJhonny = 1221;

// let num1 = 0;
// let num2 = '';
// let msj = '';
// while(numeroJhonny >= 99){
//     num1 = (numeroJhonny % 10)
//     num2 = num2 + '' + num1;
//     numeroJhonny = (numeroJhonny - num1) /10
//     msj = numeroJhonny == num2? "Es capicua" : "no es numero capicua"
// }

// console.log(msj);



// MAFER

// let numeroM = 1221;

// let numInvertido = '';
// let numeroOriginal = numeroM;

// while (numeroM > 0) {
//     let ultimoDigito = numeroM % 10;
//     numInvertido += ultimoDigito;
//     numeroM = Math.floor(numeroM / 10);
// }

// let msj = numeroOriginal == parseInt(numInvertido) ? "Es capicúa" : "No es número capicúa";

// console.log(msj);

////////////////////////////////////////

// let numero = 2012;
// // let numero = 2002;

// let num1 = ""; // vacio
// let num2 = numero; 

// do {
//     let num3 = numero % 10; // 2 , 0 , 0 , 2
//     num1 += num3; // num1 = 2 , 20 , 200 , 2002
//     numero = parseInt(numero / 10); // 200 , 20 , 2 , 0
    
// } while (numero > 0);

// if (num2 == parseInt(num1)) {  // num2 = 2002, es igual al entero de num1 = 2002
//     console.log(num2, " Es capicúa");
// } else {
//     console.log(num2, " No es capicúa");
// }




// 4-  Escribe una función que tome una cadena como argumento y la devuelva invertida

// let num = 30409;

// let num1 = [];


// while (num > 0) {

//     num1 = num % 10;
//     num1 += num2;
//     num = parseInt(num / 10);

// }




// 5- Escribe una funcion que me muestre en que cuadrante del plano cartesiano se encuentra los numeros ingresados

// let x = 8;
// let y = -2;

// if (x > 0 && y > 0){

//     console.log("X = ", x, " Y = ", y, "se encuentra en el cuadrante I");

// } else if (x < 0 && y > 0){

//     console.log("X = ", x, " Y = ", y, "se encuentra en el cuadrante II");

// } else if (x < 0 && y < 0){

//     console.log("X = ", x, " Y = ", y, "se encuentra en el cuadrante III");

// } else {

//     console.log("X = ", x, " Y = ", y, "se encuentra en el cuadrante IV");

// }




// 6- Escribir un programa que pida al usuario dos numeros y muestre por pantalla su division. 
    // si el divisor es cero, el programa debe mostrar un mensaje de error.

// let num1 = 8;
// let num2 = 2;


// let div = num1 / num2;

// if (div == 0) {
//     console.log("Error en la division");
// } else {
//     console.log(div);
// }



// 7- Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o superiores a $500 mensuales.
    //Escribir un programa que pregunte al ususario su edad y sus ingresos mensuales y muestre por pantalla si el ususario tiene que tributar o no.

// const edad = 20;
// let ingresosMensuales = 500;

// if(edad > 16 && ingresosMensuales >= 500){
//     console.log("El usuario debe tributar, ya que cumple con la edad y el monto de ingresos mensuales");

// }else if (edad <= 16 && ingresosMensuales >= 500){
//     console.log("El usuario no debe tributar, ya que no cuenta con la edad");

// }else if (edad <= 16 && ingresosMensuales < 500){
//     console.log("El usuario no debe tributar, ya que no cuenta con la edad y los ingresos mensuales");

// }else if (edad > 16 && ingresosMensuales < 500){
//     console.log("El usuario no debe tributar, ya que no cuenta con los ingresos mensuales");
// }



// 8- El chef ha inventado Fideos instantáneos de un minuto. Como sugiere el nombre, cada paquete toma exactamente un minuto para cocinar.
    // El restaurante del chef tiene X estufas y solo el paquete se puede cocinar en una sola estufa en cualquier momento. 
    // ¿A cuántos clientes puede atender el Chef en Y minutos si cada cliente ordena exactamente un paquete de fideos?

// let y = 7; //minutos
// let x = 4; //estufas

// const orden = y * x;

// console.log("Puede atender a", orden, "clientes");




// 9- Dado un numero N verifica i es par o impar, positivo o negativo.
    // Por cada caso de prueba imprime "PAR POSITIVO", "PAR NEGATIVO", "IMPAR POSITIVO", "IMPAR NEGATIVO" o "PAR" (Este ultimo se imprimira solo en el valor 0, que no es positivo ni negativo).

// const array = [2, -2, 1, -1, 0];
    
//     array.map((N) => {
//         if ( N === 0 ){
//             console.log("PAR"); 
//         } else if ( N % 2 === 0 ){
//             console.log(N > 0 ? "PAR POSITIVO" : "PAR NEGATIVO"); 
//         } else {
//             console.log(N > 0 ? "IMPAR POSITIVO" : "IMPAR NEGATIVO");
//         }
//     }
    
//     );



// 10- Los números que sean múltiplos de 3 se cambian por Fizz.
    // Los números que sean múltiplos de 5 se cambian por Buzz.
    // Los números que sean múltiplos de 3 y 5 se cambian por FizzBuzz. 
    // Escriba un programa que lea e imprima la serie FizzBuzz.

// let numero = 0;

// while (numero < 20) {
//     numero++;

//     if (numero % 3 == 0 && numero % 5 == 0) {
//         console.log(numero, "FizzBuzz");
//         continue;
    
//     } else if (numero % 5 == 0) {
//         console.log(numero, "Buzz");
//         continue;

        
//     } else if (numero % 3 == 0) {
//         console.log(numero, "Fizz"); 
//         continue;

//     }

//     console.log(numero);
// }




// 11- Array de números y debes retornar un Array en donde cada número sea multiplicado por dos. 

// const array = [1, 2, 4, 6, 9, 10, 20, 22];

// const array1 = array.map (array => array * 2);

// console.log(array1);




// 12- Array de números y tu reto es retornar los números dentro de ese Array y ordenarlos de menor a mayor.

// const array = [1, -2, 3, -7, 5, -2, 0, 4]; 

// array.sort((a, b) => a - b);
// console.log(array); // -7, -2, -2, 0, 1, 3, 4, 5




// 13- Declara un array que vamos a llamar «clasificaciones» con los siguientes valores: Ana, Oswaldo, Raúl, Celia, María, Antonio (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
// Imprime la clasificación actual
// El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

// Celia adelanta a Raúl
// Antonio es descalificado y se elimina del concurso +++
// Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
// Hay una nueva participante que pasa a encabezar la clasificación: Marta
// Imprime la clasificación actualizada y comprueba que se ha hecho correctamente

// const clasificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio']; // ['Marta', 'Ana', 'Robert', 'Amaya', 'Oswaldo', 'Celia', 'Raúl', 'María'] eliminado = "Antonio"
// // console.log(clasificaciones);

// const indiceCelia = clasificaciones.indexOf('Celia');
// const indiceRaul = clasificaciones.indexOf('Raúl');
// clasificaciones.splice(indiceCelia, 1);  
// clasificaciones.splice(indiceRaul, 0, 'Celia');  


// const indiceAntonio = clasificaciones.indexOf('Antonio');
// clasificaciones.splice(indiceAntonio, 1);  


// const indiceOswaldo = clasificaciones.indexOf('Oswaldo');
// clasificaciones.splice(indiceOswaldo, 0, 'Roberto', 'Amaya');

// clasificaciones.unshift('Marta');  

// console.log( clasificaciones);




// 14- En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. 
// Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. 
// Se supone que el dato tecleado estará entre 0 y 6.

// let diasSemana = new Array(7), num;
// diasSemana[0] = "domingo"; 
// diasSemana[1] = "lunes"; 
// diasSemana[2] = "martes"; 
// diasSemana[3] = "miercoles"; 
// diasSemana[4] = "jueves"; 
// diasSemana[5] = "viernes"; 
// diasSemana[6] = "sabado";


// // let diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

// numero = 4;

// if (numero >= 0 && numero <= 6){
//     console.log("El dia es: ", diasSemana[numero]);

// } else {
//     console.log("Numero invalido.");

// }




// 15- Crea un array de al menos 10 elementos para guardar números enteros. 
// Usa un método para obtener la suma de los números pares y la de los números impares.

// let numeros = [2, 3, 77, 19, 30, 8, 12, 24, 20, 50]; // PARES = 2, 30, 8, 12, 24, 20, 50 == 146; IMPARES = 3, 77, 19 == 99

// let sumPares = numeros.reduce( (sum, val) => val%2==0?val+sum:sum, 0);
// let sumImpares = numeros.reduce( (sum, val) => val%2!=0?val+sum:sum, 0);
// console.log(sumPares);
// console.log(sumImpares);



// 16- Crea un array bidimensional para almacenar nombre y calificación de un grupo de asistentes a un curso. 
// Una vez creado rellénalo con al menos 4 elementos y luego ordénalos por orden crecientes de las calificaciones. 

// const notas = [["joel", 2], 
// ["diego", 4],
// ["junior", 5],
// ["jhonny", 3]]; 

// notas.sort((a, b) => a[1] - b[1]);

// console.log(notas);



// 17- Tenemos dos listas de asistentes a dos cursos: html y css. 
// Queremos obtener una lista de los asistentes a ambos cursos. La lista estará ordenada.

// const cursoHtml = ['joel', 'diego', 'junior', 'jhonny'];
// const cursoCss = ['juan', 'santiago', 'diego', 'junior', 'jhonny'];

// const lista = cursoHtml.filter(asistente => cursoCss.includes(asistente));
// cursoHtml.sort();

// console.log(lista);



// 18- Tienes una lista de objetos con los nombres de los miembros de una familia. 
// Este script debe devolver dos objetos con los datos (nombre y edad) del miembro de mayor edad y del de menor edad.

// const familia = [
// {nombre: 'catalina', edad: 17},
// {nombre: 'julian', edad: 50},
// {nombre: 'luis', edad: 22},
// {nombre: 'marta', edad: 49},
// {nombre: 'angel', edad: 6}
// ];

// // console.log(miembros);

// const mayorEdad = familia.reduce((max , miembros) => miembros.edad > max.edad ? miembros : max, familia[0]);
// const menorEdad = familia.reduce((min , miembros) => miembros.edad < min.edad ? miembros : min, familia[0]);


// console.log("El miembro de mayor edad es: ", mayorEdad);
// console.log("El miembro de menor edad es: ", menorEdad);



// 19- Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) 
// y utiliza un método del objeto para recorrer el array y convertir cada elemento de ese array a mayúsculas.
// Usa console.table para ver el resultado.

// const diasLaborables = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

// diasLaborables.forEach((dia, index, array) => {
//     // console.log(dia);
//     // console.log(index);
//     // console.log(array);
//     array[index] = dia.toUpperCase();
// });

// console.table(diasLaborables);
// console.log(diasLaborables);

