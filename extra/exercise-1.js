// Crea una función llamada splitName que divida un nombre completo en nombre y apellido. 
//Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

// De tal modo que si tenemos el texto "Sylvester Stalone" obtendremos dos variables...
//una con el valor "Sylvester" y otra con el valor "Stalone".

// En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf()


function splitName(NombreApellidos){
    let nombre = NombreApellidos.split(" ")[0]
    let apellidos = NombreApellidos.split(" ")[1]
    return {nombre, apellidos};

}

console.log(splitName("Sylvester Stalone"));

function splitName(NombreApellidos){
    let nombre = NombreApellidos.split(" ")
    return nombre;

}

nombres = splitName("Sylvester Stalone");

console.log(`Nombre: ${nombres[0]}`);
console.log(`Apellido: ${nombres[1]}`);


