export class API {
    constructor(nombre) {
        this.nombre = nombre;
    }
    async consultarAPI() {


        const url = `https://pokeapi.co/api/v2/pokemon/${this.nombre}`;
        const link = await fetch(url);
        const respuesta = await link.json();
        return {
            respuesta
        }
    }

}



