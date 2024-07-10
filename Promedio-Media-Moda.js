
const PlatziMath = {};

PlatziMath.calcularPromedio = function calcularPromedio(lista){
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


PlatziMath.calcularPromedio2 = function calcularPromedio2 (lista){
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

//calculando mediana en una lista impar'

PlatziMath.esPar = function esPar(lista){
    return !(lista.length % 2);
}
PlatziMath.esImpar = function esImpar(lista){
    return lista.length % 2;
}

PlatziMath.calcularMediana =  function calcularMediana (listaDesordenada){
    const lista = ordenarLista(listaDesordenada)
    const listaPar = esPar(lista);

    //Calculando mediana en lista Par
    if (listaPar) {
        const indexMitaListaPar = (lista.length / 2) -1;
        const indexMita2ListaPar = lista.length / 2 ;
        
        const listaMitades = [];
            listaMitades.push(lista[indexMitaListaPar]);
            listaMitades.push(lista[indexMita2ListaPar]);
            const medianaListaPar  = calcularPromedio (listaMitades)
            return medianaListaPar
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2) ;
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar
        
    }
}

// Ordenar lista ---------------------------------------


PlatziMath.ordenarLista = function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
      /* 
      if (valorAcumulado > nuevoValor ) {
            return 1;
       } else if (valorAcumulado === nuevoValor){
            return 0;
       }else if (valorAcumulado < nuevoValor){
            return -1 ;
       }*/
        return valorAcumulado - nuevoValor;
    }
    // const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
//----------------------------------------------------------
//Calcular Moda

PlatziMath.calcularModa = function calcularModa (lista){
    const listaCount = {};
        for (let i = 0; i< lista.length; i++) {
            const elemento = lista[i];

            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            }else {
                listaCount[elemento] = 1;
            }
        }


        const listaArray = Object.entries(listaCount);
        const  listaOrdenada = ordenarListaBidireccional(listaArray,1);
        const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
        console.log(listaCount);
        console.log(listaArray);
        console.log(listaOrdenada);
        console.log(listaOrdenadaMaxNumber);
        console.log('la moda es:' + listaOrdenadaMaxNumber );
        const moda = listaOrdenadaMaxNumber[0]
        return moda

}

//----------
PlatziMath.ordenarListaBidireccional =  function ordenarListaBidireccional(listaDesordenada, i){
    function ordenarListaSort(valorAcumulado, nuevoValor){

        return valorAcumulado[1] - nuevoValor[1];
    }
    // const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}





    



