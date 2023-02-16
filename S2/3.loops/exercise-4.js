/*
Dado el siguiente array
const toys = [
                {id: 5, name: 'Buzz MyYear'}, 
                {id: 11, name: 'Action Woman'}, 
                {id: 23, name: 'Barbie Man'}, 
                {id: 40, name: 'El gato con Guantes'},
                {id: 40, name: 'El gato felix'}
            ]
Usa un bucle forof para recorrer todos los toys 
y elimina los que incluyan la palabra `gato`. 
Recuerda que puedes usar la función `.includes()` para comprobarlo.
*/

let toys = [
                {id: 5, name: 'Buzz MyYear'}, 
                {id: 11, name: 'Action Woman'}, 
                {id: 23, name: 'Barbie Man'}, 
                {id: 40, name: 'El gato con Guantes'},
                {id: 40, name: 'El gato felix'}
            ]

let toys_2 = [];
for(let toy of toys){
    if (!toy.name.includes("gato")){
        toys_2.push(toy)
    }
}

// for(let i = 0;i<toys.length;i++){
//     if (toys[i].name.includes("gato")){
//         toys.splice(i, 1);
//         i--;   
//     }
// }

// for (let toy of toys) {
//     if (toy.name.includes("gato")) {
//       let index = toys.indexOf(toy);
//       toys.splice(index, 1);
//     }
//   }

// for(let toy of toys){
//     if(toy.name.includes("gato")){
//         toys.splice(toys.indexOf(toy),1)
//     }
// }

// for (let toy of toys) {
//     if (toy.name.includes("gato")) {
//         let index = toys.indexOf(toy);
//         //delete toys[index];        
//         toys.splice(index, 1);// Si lo pongo solo me borra un registro, porque?    }
// }

for(let i = 0;i<toys_2.length;i++){
    console.log(toys_2[i]);
}