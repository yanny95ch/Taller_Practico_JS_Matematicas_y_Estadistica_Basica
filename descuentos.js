const inputPrice = document.querySelector ('#price');
//const inputDiscount=document.querySelector('#discount');
const inputCoupon=document.querySelector('#coupon')
const btn = document.querySelector ('#calcular');
const pResult=document.querySelector('#result');

btn.addEventListener ('click', calcularPrecioConCupon);

/*function calcularPrecioConDescuento(){
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

    switch (coupon) {
        case 'Luli_2024':
            discount=30;
            break;
        case 'Azra_2025':
            discount=25;
            break;
        default:
            pResult.innerText= 'El Cupon no es Valido';
            return;
        
    }

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




