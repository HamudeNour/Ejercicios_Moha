// Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' 
// usando .filter() y usa .reduce() para conseguir la media de sus .score. 
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.


const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

// console.log(videogames[0].genders);

function contieneRGP(Videogame){
    return Videogame.genders.includes("RPG");
}

function obtenerScores(game){
    return game.score;
}


// let newVideoGames = videogames.filter(contieneRGP);
// misScores = newVideoGames.map(obtenerScores);
// console.log(newVideoGames);




let newVideoGames = videogames.filter(game => game.genders.includes("RPG"));
let misScores = newVideoGames.map(game => game.score);
let sumaTotal = misScores.reduce((acc, score) => acc + score, 0);


console.log(newVideoGames);
console.log(sumaTotal / misScores.length)
