// Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

const myInput$$ = document.querySelector('input');

myInput$$.addEventListener('input',()=>{
    console.log(myInput$$.value);
})