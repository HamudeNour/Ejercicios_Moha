async function ObtenerDatos(){
    const misDatos = await fetch('https://api.agify.io?name=michael');
    const resultados = await misDatos.json();
    return resultados;
}

console.log(ObtenerDatos());