// Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen. 
const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

countries.forEach(country => {
    let miDiv = document.createElement('div');
    let miH4 = document.createElement('h4');
    miH4.innerText = country.title;
    let miImg = document.createElement('img');
    miImg.src = country.imgUrl;
    miImg.alt = country.title;
    miDiv.appendChild(miH4);
    miDiv.appendChild(miImg);
    document.body.appendChild(miDiv);
});

