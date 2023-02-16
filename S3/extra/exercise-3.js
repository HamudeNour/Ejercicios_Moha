// Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const miDiv = document.querySelector('[data-function="printHere"]');

const miUl = document.createElement('ul');
cars.forEach(car => {
    let miLi = document.createElement('li');
    miLi.innerText = car;
    miUl.appendChild(miLi);
});
miDiv.appendChild(miUl);