// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const miUl = document.createElement('ul');

countries.forEach(country => {
    let miLi = document.createElement('li');
    miLi.innerText = country;
    miUl.appendChild(miLi);
});

document.body.appendChild(miUl);

