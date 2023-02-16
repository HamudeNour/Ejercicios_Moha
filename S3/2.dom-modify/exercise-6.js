const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const myUl = document.createElement('ul');

apps.forEach(app => {
    let myLi = document.createElement('li');
    myLi.innerHTML = app;
    myUl.appendChild(myLi);
});

document.body.appendChild(myUl)