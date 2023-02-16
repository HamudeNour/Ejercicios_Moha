/*
Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

*/
function findArrayIndex(array, text) {
    let misPosiciones = [];
    for(let i= 0;i<array.length;i++){
        if(array[i] === text){
            misPosiciones.push(i);
        }
    }
    return misPosiciones
}

let myArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

let miIndex = findArrayIndex(myArray, "Caracol");
console.log(miIndex);

miIndex = findArrayIndex(myArray, "Mosquito");
console.log(miIndex);

miIndex = findArrayIndex(myArray, "Salamandra");
console.log(miIndex);

miIndex = findArrayIndex(myArray, "Ajolote");
console.log(miIndex);

miIndex = findArrayIndex(myArray, "Moha");
console.log(miIndex);