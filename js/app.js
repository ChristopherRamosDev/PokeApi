import { API } from './api.js';
import * as UI from './ui.js';



UI.fomularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombre = document.querySelector('#pokemon').value;
    nombre = nombre.toLowerCase();

    if (nombre.trim() === '') {

        UI.divMensaje.innerHTML = 'Escriba el nombre de un anime';
        UI.divMensaje.classList.add('error');
        setTimeout(() => {
            UI.divMensaje.innerHTML = '';
            UI.divMensaje.classList.remove('error');
        }, 2000);
    }
    else {
        async function apies (){
            const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
            try {
                
                
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
           
                let html = `
                    <div id="resultado">
                    <p>Skills ${resultado.abilities[0].ability.name} and 
                    ${resultado.abilities[1].ability.name}</p>
                    <p>${resultado.stats[0].stat.name}
                    ${resultado.stats[0].base_stat}</p>
                    <p>${resultado.stats[1].stat.name}
                    ${resultado.stats[1].base_stat}</p>
                    <p>${resultado.stats[2].stat.name}
                    ${resultado.stats[2].base_stat}</p>
                    <p>${resultado.stats[3].stat.name}
                    ${resultado.stats[3].base_stat}</p>
                    <p>${resultado.stats[4].stat.name}
                    ${resultado.stats[4].base_stat}</p>
                    <p>${resultado.stats[5].stat.name}
                    ${resultado.stats[5].base_stat}</p>
                    <p>Type:
                    ${resultado.types[0].type.name}</p>
                    
                `                               
                ;

                let imagehtml = `<img src="${resultado.sprites.other.dream_world.front_default}"<p>`;


                console.log(resultado);
                UI.divResultado.innerHTML = html;
                
                UI.imagen.innerHTML = imagehtml;
                
            } catch (error) {
             
                UI.divMensaje.innerHTML = 'Pokemon no encontrado';
                UI.divMensaje.classList.add('error');
                setTimeout(() => {
                    UI.divMensaje.innerHTML = '';
                    UI.divMensaje.classList.remove('error');
                    
                }, 2000);
                
               
                 
            }
            
    }
        apies();

        
        function addDiv(){
            UI.imagen.innerHTML = '';       
           UI.divResultado.innerHTML = '';
        }
        addDiv();
}})
