const myDiv = document.createElement('div');
const myParagrah = document.createElement('p');
myParagrah.innerHTML = 'Hola Mundo';

myDiv.appendChild(myParagrah);
document.body.appendChild(myDiv);