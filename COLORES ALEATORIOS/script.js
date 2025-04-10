function generarColorhex() {
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'


    for (let i = 0; i < 6; i++) {
        colorHex += digitos[Math.floor(Math.random() * 16)] //indice aleatorio // += ayuda a  agregar el # a los digitos
    }
    
    return colorHex //retorna el color hexadecimal
}

let body = document.querySelector('body') //selecciona el elemento con id body
let texto = document.querySelector('#texto') //selecciona el elemento con id texto
let boton = document.querySelector('#boton') //selecciona el elemento con id boton

function cambiarColor() {

    let colorNuevo = generarColorhex() //llama a la funcion generarColorHex
    body.style.backgroundColor = colorNuevo //cambia el color de fondo al color generado
    texto.textContent = colorNuevo //cambia el texto por el codigo hex
}

boton.addEventListener('click', cambiarColor) //agrega un evento al boton que llama a la funcion cambiarColor al hacer click