async function obtenerDatosAPI(pais) {
    const misDatos = await fetch(`https://api.nationalize.io?name=${pais}`);
    const resultado = await misDatos.json();
    return resultado;
}

const miInput = document.getElementsByTagName('input')[0];
const miBoton = document.getElementsByTagName('button')[0];
const miDiv = document.getElementsByClassName('div-datos');

miBoton.addEventListener('click', () => {
    const valor = miInput.value.trim();
    if (valor != '') {
        const result = obtenerDatosAPI(valor);
        // miDiv.innerHTML = '';
        //     result.country.forEach(x => {
        //         console.log(x);
        //         // let miP = document.createElement('p');
        //         // miP.innerHTML = `El nombre ${valor} tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ`
        //     });
    }
});

const Datos = {
    "country": [{ "country_id": "MA", "probability": 0.265 },
    { "country_id": "DZ", "probability": 0.135 },
    { "country_id": "TN", "probability": 0.06 },
    { "country_id": "EG", "probability": 0.054 },
    { "country_id": "SA", "probability": 0.049 }
    ],
    "name": "moha"
}