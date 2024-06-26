
console.group('cuadrado')
const ladoCuadrado = 4;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado){
    return{
        perimetro:lado*4,
        area:lado * lado,
    }
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});
console.groupEnd('cuadrado')

console.group('triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase= 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo=  ladoTriangulo1 + ladoTriangulo2 +ladoTrianguloBase;
const areatriangulo = (ladoTrianguloBase*alturaTriangulo)/2;


function calcularAlturaTriaEscaleno(lado1Base, lado2, lado3){


}

function calcularAlturaTriangulo(lado1, base){
    if(lado1==base){
        console.warn('Este no es un triangulo isosceles');
    }else {
        //h= raizcuadrada (lado1**2 - (b**2)/2)
        const altura= Math.sqrt( (lado1**2) - ((base**2)/4));
        return{altura}
        // O simplemente hacemos 'return Math.sqrt( (lado1**2) - ((base**2)/4));'
    }
}

function calcularPerimetroTriangulo(lado1, lado2, base, altura){
    return{
        perimetro:lado1 +lado2 +base,
        area:(base*altura)/2,
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areatriangulo,
});

console.groupEnd('triangulo')

console.group('circle')

const radioCirculo=3;
const diametroCirculo= radioCirculo*2;
const PI = 3.1415;

const circunferencia = diametroCirculo*PI;
const areaCirculo= (radioCirculo**2)*PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo,
    PI,
});



function calcularCirculo(radio){
    const diametro= radio*2;
    const radioalcuadrado= Math.pow(radio,2);
    return{
        circunferencia:diametro*Math.PI,
        area:radioalcuadrado*Math.PI,
    };
}

console.groupEnd('circle')