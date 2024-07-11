console.log(salarios);

 //Analisis personal para Juanita   .find

 function encontrarPersona (personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda);

    /*
    const personaEnBusqueda = 'Juanita' 
    const persona = salarios.find((persona) => {
        return persona.name === personaEnBusqueda;
    });
    return persona
    */
 }

 function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function(elemento){
        return elemento.salario;
    })
    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
} 

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

     let porcentajesCrecimiento= [];

     for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i-1].salario;
        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento  = crecimiento / salarioAnterior;

        porcentajesCrecimiento.push(porcentajeCrecimiento)
     }
     console.log(porcentajesCrecimiento);

     const medianaPorcentajeDeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
     console.log({porcentajesCrecimiento,medianaPorcentajeDeCrecimiento});

     const ultimoSalario = trabajos[trabajos.length -1].salario;
     const aumento = ultimoSalario * medianaPorcentajeDeCrecimiento;
     const nuevosalario = ultimoSalario +aumento

     console.log({nuevosalario});
}