export const ContarSpacios = (tabla, item) => {
    if(typeof item.innerHTML === 'string'){
        return item.innerHTML === '';
    }
}