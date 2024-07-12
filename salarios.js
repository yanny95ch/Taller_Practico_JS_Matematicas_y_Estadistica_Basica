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
     
     //console.log({porcentajesCrecimiento,medianaPorcentajeDeCrecimiento});

     const ultimoSalario = trabajos[trabajos.length -1].salario;
     const aumento = ultimoSalario * medianaPorcentajeDeCrecimiento;
     const nuevosalario = ultimoSalario +aumento

     console.log({nuevosalario});
}

// ANALISIS empresasRIA
/* 
{
    Industrias Mokepon:{
        2018: [salario,salarios,salarios];
        2019: [];
        2020:
        2025:
    },
}
*/
const empresas = {};
for (persona of salarios){
    for (trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa]= {};
        };

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log({empresas});

//

function medianaEmpresaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn('La empresa no existe');
    }else if (!empresas[nombre][year]){
        console.warn('La empresa no dio salarios año ');
    }else{
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

// 

function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn('La empresa no existe');
    }else{
        const empresasYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresasYears.map((year)=>{
            return medianaEmpresaYear (nombre,year);
        });
            let porcentajesCrecimiento= [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioAnterior = listaMedianaYears[i-1];
            const crecimiento = salarioActual - salarioAnterior;
            const porcentajeCrecimiento  = crecimiento / salarioAnterior;

            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }
        console.log(porcentajesCrecimiento);

        const medianaPorcentajeDeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
        console.log({porcentajesCrecimiento,medianaPorcentajeDeCrecimiento});

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length -1];
        const aumento = ultimaMediana * medianaPorcentajeDeCrecimiento;
        const  nuevaMediana= ultimaMediana +aumento
   
        return nuevaMediana;
        }
}

