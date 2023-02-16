/*
Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.
*/
function swap(miArray, pos_1 ,pos_2){
    let miValorPos1 = miArray[pos_1];
    miArray[pos_1] = miArray[pos_2];
    miArray[pos_2] = miValorPos1;

    return miArray;
}

let myArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
console.log(myArray);
myArray = swap(myArray, 0,3);
console.log(myArray);
