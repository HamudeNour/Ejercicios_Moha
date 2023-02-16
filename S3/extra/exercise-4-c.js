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
    let  miBotonBorrar = document.createElement('button');
    miBotonBorrar.innerText = 'Borrar'
    miDiv.appendChild(miBotonBorrar);
    miBotonBorrar.addEventListener('click',()=>{
        miDiv.parentNode.removeChild(miDiv);
    });
    document.body.appendChild(miDiv);
});