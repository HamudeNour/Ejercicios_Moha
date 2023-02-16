// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!',
//  dentro de todos los div con la clase .fn-insert-here
const myDivs$$ = document.querySelectorAll('.fn-insert-here');

myDivs$$.forEach(element => {
    let myParagraph$$ = document.createElement('p');
    myParagraph$$.innerHTML = 'Voy dentro!';
    element.appendChild(myParagraph$$);
});

