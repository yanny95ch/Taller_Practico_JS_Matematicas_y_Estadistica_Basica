
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