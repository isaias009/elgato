import { AccessTable, generate} from "./table.js";
import { ContarSpacios } from './status.js';

window.addEventListener('load', function(even) {

    const contenedor = document.getElementById('content--result');
    const tabla = document.getElementsByClassName('tabla');
    const columns = document.getElementsByClassName('tabla--fila');
    const filas = [columns[0].children, columns[1].children, columns[2].children];

    const send = document.getElementById('calculate');

    AccessTable(tabla, filas, (tabla, item) => {
        item.addEventListener('click', () => {
            generate(tabla, item);
        });
    });

    
    send.addEventListener('click', ()=>{
        let cont = 0;

        AccessTable(tabla, filas, (tabla, item) => {
            if(ContarSpacios(tabla, item)){
                cont = cont + 1;
            }
        });

        

        while(cont != 0){
            const NuevaTabla = tabla[0].cloneNode(true);
            console.log(NuevaTabla);

            contenedor.appendChild(NuevaTabla);

            cont--;
        }

    });




});