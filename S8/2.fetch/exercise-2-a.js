async function obtenerDatosAPI(pais){
    const misDatos = await fetch(`https://api.nationalize.io?name=${pais}`);
    const resultado = await misDatos.json();
    return resultado;
}

const miInput = document.getElementsByTagName('input')[0];
const miBoton = document.getElementsByTagName('button')[0];

miBoton.addEventListener('click', ()=>{
    const valor = miInput.value.trim();
    if(valor != ''){
        const result = obtenerDatosAPI(valor);
        console.log(result);
    }
});