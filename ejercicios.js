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




// 6- Escribir un programa que pida al usuario dos numeros y muestre por pantalla su division. si el divisor es cero, el programa debe mostrar un mensaje de error.

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

const array = [2, -2, 1, -1, 0];
    
    array.map((N) => {
        if ( N === 0 ){
            console.log("PAR"); 
        } else if ( N % 2 === 0 ){
            console.log(N > 0 ? "PAR POSITIVO" : "PAR NEGATIVO"); 
        } else {
            console.log(N > 0 ? "IMPAR POSITIVO" : "IMPAR NEGATIVO");
        }
    }
    
    );



