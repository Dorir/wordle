console.log("Hola Mundo")

let intentos = 6;
let reint = 0;
// https://random-word-api.herokuapp.com/word?length=5;
let palabra;

fetch('https://random-word-api.herokuapp.com/word?length=5&&lang=es' )
    .then (response => response.json())
    .then (response =>{
        console.log(response)
        palabra = response [0].toUpperCase()
    })
    .catch(err => console.error(err))

// let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']

// const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
// console.log(palabra);

window.addEventListener('load', init)
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

const input = document.getElementById("guess-input");
const valor = input.value;

function intentar(){
    console.log(palabra);
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    GRID.className = 'grid';
    console.log("Intento!")
    const INTENTO = leerIntento();
   
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE

            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';

        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO

            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';

        } else { //GRIS

            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN);
      
    }
    
    GRID.appendChild(ROW);

	intentos--

    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")

        return
    }
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")

    }
}
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button")
    INPUT.disabled = true;
    BOTON.disabled = true;
    BOTON.innerHTML= "Reintentar?"
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    reint = 1;
}




