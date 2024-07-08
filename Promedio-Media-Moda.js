
function calcularPromedio(lista){
    //sumar todos los elementos del array / cantidad de elementos
    let sumaLista = 0
    
    for (let i = 0; i < lista.length; i++) {
       sumaLista = sumaLista + lista[i];
        
    }
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;

    //lista.length
}
calcularPromedio([1,2,3])


function calcularPromedio2 (lista){
    function sumarTodosLosElementos(valorAcumulado,nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosLosElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;


    //lista.length

}
calcularPromedio2([1,2,3])