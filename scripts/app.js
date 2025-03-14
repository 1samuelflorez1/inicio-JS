
//------------------1. comentarios

/*
Esto es un gran comentario!



// ------------------------ 2. variables

//variable (puede cambiar su valor)

let variableLet = "Hola" 

variableLet = "Mundo!"

variableLet = "Esto es una variable"

//console.log(variableLet)

//Constante (Sirva para datos que se repiten varias veces)
 
const constanteConts = "Eso es una constante"

///console.log(ConstanteConts)

var Esmayor = true

*/

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById("number").value
    const fechadenacimiento = document.getElementById("fechadenacimiento").value

    const textoFinal = `Mi nombre es ${nombre}, mi edad es ${edad} y naci el ${fechadenacimiento}`
    document.getElementById('resultado').textContent = textoFinal
})