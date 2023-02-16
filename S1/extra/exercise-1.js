const users = [
    {name: "Abel", years: 43}, 
    {name: "Maria", years: 18}, 
    {name: "Pedro", years: 14}, 
    {name: "Samantha", years: 32}, 
    {name: "Raquel", years: 16}
];

for(let user of users){
   /* if(user.years >= 18){
        console.log(`El usuario ${user.name} es mayor de edad`);
    }else{
        console.log(`El usuario ${user.name} es menor de edad`);
    }*/
    user.edad >=18 ? console.log(`El usuario ${user.name} es mayor de edad`) : console.log(`El usuario ${user.name} es menor de edad`);
}