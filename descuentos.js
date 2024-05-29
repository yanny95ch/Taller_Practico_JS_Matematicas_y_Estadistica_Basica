const inputPrice = document.querySelector ('#price');
//const inputDiscount=document.querySelector('#discount');
const inputCoupon=document.querySelector('#coupon')
const btn = document.querySelector ('#calcular');
const pResult=document.querySelector('#result');

btn.addEventListener ('click', calcularPrecioConCupon);

//const arrayObjeto= undefined; //['cupones': descuento]{}?
 
const cuoponObj ={
    'Luli_2024':30,
    'AZra_2025':25,
    'valido*20':20,
    'cuponcito':15,
};
/* Este codigo va en la clase de  aplicar  % 
 con la  const inputDiscount=

function calcularPrecioConDescuento(){
    //(P*(100-D)) /100
    const price= Number(inputPrice.value);
    const discount= Number(inputDiscount.value);

    console.log({price,discount});

    if(!price || !discount){
        pResult.innerText= 'Por favor, ingresa valores validos al formulario';
        return;
    }
    if (discount > 100){
        pResult.innerText= 'El descuento excede el  permitido; por favor  !!Paga';
        return;
    }

    const newPrice= (price * (100-discount)) /100;

    pResult.innerHTML= 'El nuevo precio con descuento es  $'+ newPrice;

}*/

function calcularPrecioConCupon(){
    const price= Number(inputPrice.value);
    const coupon= inputCoupon.value;

    if(!price || !coupon){
        pResult.innerText= 'Por favor, ingresa valores validos al formulario';
        return;
    }

    let discount;

    if(cuoponObj[coupon]){
        discount= cuoponObj[coupon];
    }else{
        pResult.innerText= 'El Cupon no es Valido';
        return;
    }

//esteos condicionale acontinuacion, son de la clase  de aplicar cupones de %; solo que se usaron 2 condicionales como forma de ver las diferentes soluciones posibles

    /*switch (coupon) {
        case 'Luli_2024':
            discount=30;
            break;
        case 'Azra_2025':
            discount=25;
            break;
        default:
            pResult.innerText= 'El Cupon no es Valido';
            return;
        
    }*/

    /*if(coupon == 'Luli_2024'){
        discount = 30;

    }else if (coupon == 'Azra_2025'){
        discount = 25;
    }else{
        pResult.innerText= 'El Cupon no es Valido';
        return;
    }*/

    const newPrice= (price * (100-discount)) /100;

    pResult.innerHTML= 'El nuevo precio con descuento es  $'+ newPrice;

}




