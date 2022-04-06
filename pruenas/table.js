 export const AccessTable = (tabla, filas, evento) => {
    Array.prototype.forEach.call(filas, (fila)=>{
        Array.prototype.forEach.call(fila, (item)=>{
            evento(tabla, item);
        });
    });
}

export const generate = (tabla, item) => {

    Array.prototype.forEach.call(tabla, (tbl)=>{

        if(tbl.attributes["data-turno"].value == "1" && (item.innerHTML).length == 0){
            const equis = document.createElement('img');
            equis.src = "../img/equis.png";
    
            item.appendChild(equis);
            tbl.dataset.turno = "2";
    
        }else if((item.innerHTML).length == 0){
            const circulo = document.createElement('img');
            circulo.src = "../img/circle.png";
    
            item.appendChild(circulo);
            tbl.dataset.turno = "1";
        }

    });
    
}