import * as UI from './interfaz.js'
const { divResultado, headingResultado, divMensajes } = UI

class API {
    constructor(artista, cancion) {
        this.artista = artista
        this.cancion = cancion
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                if (datos.lyrics) {
                    const { lyrics } = datos
                    divResultado.textContent = lyrics
                    headingResultado.textContent = `Letra de la cancion: ${this.cancion} de: ${this.artista}`
                } else {
                    divMensajes.textContent = 'La cancion no existe prueba otra busqueda'
                    divMensajes.classList.add('error')
                    setTimeout(() => {
                        divMensajes.textContent = ''
                        divMensajes.classList.remove('error')
                    }, 3000);
                }
            })
    }
}

export default API