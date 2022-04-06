export const setPrimerNivel = (obj) => {
    localStorage.setItem('PrimerNivel', obj.innerHTML);
}

export const getPrimerNivel = () => {

    if(!(localStorage.getItem('PrimerNivel'))){
        localStorage.setItem('PrimerNivel', '[0,0,0,0,0,0,0,0,0]');
    }

    return localStorage.getItem('PrimerNivel');
}