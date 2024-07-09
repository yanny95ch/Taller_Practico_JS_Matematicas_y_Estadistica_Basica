
function calcularPromedio(lista){
    //sumar todos los elementos del array / cantidad de elementos
    let sumaLista = 0
    
    for (let i = 0; i < lista.length; i++) {
       sumaLista = sumaLista + lista[i];
        
    }
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;

}
calcularPromedio([1,2,3])


function calcularPromedio2 (lista){
    function sumarTodosLosElementos(valorAcumulado,nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    // () => {} arrow function  sintaxis
    //const sumarTodosLosElementos = (valorAcumulado,nuevoValor) => valorAcumulado + nuevoValor; 'eliminanado lo anteior'
    // const ejemplo = (a,b) => a + b;


    const sumaLista = lista.reduce(sumarTodosLosElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;


    //lista.length

}
calcularPromedio2([1,2,3])

//--------------------------------------------------------------------------------


function esPar(lista){
    return !(lista.length % 2);
}
function esImpar(lista){
    return lista.length % 2;
}

function calcularMediana (lista){
    const listaPar = esPar(lista);

    if (listaPar) {
        //...
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2) ;
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar
        
    }
}