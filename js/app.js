import * as UI from './interfaz.js'
const { formularioBuscar, divMensajes } = UI

formularioBuscar.addEventListener('submit', buscarCancion)

function buscarCancion(e) {
    e.preventDefault()
    //obtener datos de artista
    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    // artista === '' || cancion === '' ? console.log('no paso') : console.log('paso');
    if ((artista && cancion) === '') {
        divMensajes.textContent = 'Error... todos los campos son obligatorios'
        divMensajes.classList.add('error')

        setTimeout(() => {
            divMensajes.textContent = ''
            divMensajes.classList.remove('error')
        }, 3000);
    }
}
