function rollDice(numCaras) {
    /*
    Math.Random devuelve un Valor entre 0 y 1 
    Multiplicamos el resultado por el numero de caras del dado
    Como los dados no tienen '0' caras debemos sumarle '1' a la multiplicacion para obtener un resultado
    que este entre 1 y el numero de caras del dado.
    */
    return Math.floor(Math.random() * numCaras) + 1;
  }
  
  console.log(rollDice(6));
  console.log(rollDice(1)); 
  