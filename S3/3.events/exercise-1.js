// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log 
// con la información del evento del click

const myButton$$ = document.createElement('button');
myButton$$.id = 'btnToClick';
myButton$$.innerHTML = 'Click Me';

document.body.appendChild(myButton$$);

myButton$$.addEventListener('click',()=>{
    console.log(`${myButton$$.innerHTML}: me has clicado`)
})