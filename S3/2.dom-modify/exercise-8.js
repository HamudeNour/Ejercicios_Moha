// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

/**
 * Creamos un parafo 'p'
 */
const myParagraph$$ = document.createElement('p');
myParagraph$$.innerHTML = 'Voy en medio!';
const myDivs$$ = document.querySelectorAll('div');

document.body.insertBefore(myParagraph$$ ,myDivs$$[1]);