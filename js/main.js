const TablaOriginal = document.getElementById('content--fila1').getElementsByTagName('table')[0];


const movimiento = (tabla) => {
    const filas = [...tabla.children[0].children];
    filas.forEach((fila) => {
        const columnas = [...fila.children];
        
        columnas.forEach((columna)=>{

            columna.addEventListener('click', (e) => {
            
                if(tabla.attributes["data-turno"].value == "1" && (columna.innerHTML).length == 0){
                    const equis = document.createElement('i');
                    equis.className = "fa-solid fa-xmark";
            
                    columna.appendChild(equis);
                    tabla.dataset.turno = "2";
                    
                }else if((columna.innerHTML).length == 0){
                    const circulo = document.createElement('i');
                    circulo.className = "fa-regular fa-circle";
            
                    columna.appendChild(circulo);
                    tabla.dataset.turno = "1";
                }
            });

        });
    });
    
}


const generarPrimeraFila = () => {
    const btn = document.getElementById('btn-fila1');
    const content2 = document.getElementById('content--fila2');

    btn.addEventListener('click', (e) => { 
        for(let i = 0; i < 3; i++){
            const TablaNueva = TablaOriginal.cloneNode(true);
            movimiento(TablaNueva);
            content2.style.display = 'flex';
            content2.appendChild(TablaNueva);
        }

        const nextBtn = document.getElementById('btn-fila2');
        nextBtn.style.display = 'block';
        generarSegundaFila();
        btn.style.display = 'none';
    });

}

const generarSegundaFila = () => {
    const content3 = document.getElementById('content--fila3');
    const tablas = [...document.getElementById('content--fila2').getElementsByClassName('tabla')];
    const btn = document.getElementById('btn-fila2');

    btn.addEventListener('click', (e) => {
        
        tablas.forEach((tabla) => {
            for(let i = 0; i < 2; i ++){
                const TablaNueva = tabla.cloneNode(true);
                movimiento(TablaNueva);
                content3.style.display = 'flex';
                content3.appendChild(TablaNueva);
            }
        });

        const nextBtn = document.getElementById('btn-fila3');
        nextBtn.style.display = 'block';
        generarTerceraFila();
        btn.style.display = 'none';
    });
}


const generarTerceraFila = () => {
    const content4 = document.getElementById('content--fila4');
    const tablas = [...document.getElementById('content--fila3').getElementsByClassName('tabla')];
    const btn = document.getElementById('btn-fila3');

    btn.addEventListener('click', (e) => {
        
        tablas.forEach((tabla) => {
            const TablaNueva = tabla.cloneNode(true);
            movimiento(TablaNueva);
            content4.style.display = 'flex';
            content4.appendChild(TablaNueva);
        });

        const nextBtn = document.getElementById('btn-fila4');
        nextBtn.style.display = 'block';
        btn.style.display = 'none';
    });
}


const generarInputs = () => {
    const inputs = [...document.getElementsByClassName('inputs')];
    const btn = document.getElementById('btn-fila4');
    
    btn.addEventListener('click', () => {
        inputs.forEach((input)=>{
            input.style.display = 'flex';
        });

        btn.style.display = 'none';
    });
}

movimiento(TablaOriginal);
generarPrimeraFila();
generarInputs();





// const filas = [...tabla.children];
// filas.forEach((fila) => {
//     const columnas = [...fila.children];
//     columnas.forEach((columna)=>{
    
//     });
// });