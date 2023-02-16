let myParagraph$$ = document.querySelectorAll('.fn-remove-me');

myParagraph$$.forEach(element=> {
    element.parentNode.removeChild(element);
});