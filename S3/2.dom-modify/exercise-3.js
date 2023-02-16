const myDiv = document.createElement('div');

for (let i = 0; i <= 5; i++) {
    let myParagrafh = document.createElement('p');
    myParagrafh.innerHTML = `${i + 1} - Hola Mundo`;
    myDiv.appendChild(myParagrafh);
}

document.body.appendChild(myDiv);


