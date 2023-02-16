const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

 const miBotonBorrar = document.querySelector('.btn-borrar');
// document.body.appendChild(miBotonBorrar);

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

miBotonBorrar.addEventListener('click',()=>{
    document.body.removeChild(document.body.lastChild);
});