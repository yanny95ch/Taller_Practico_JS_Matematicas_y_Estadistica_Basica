const inputPrice = document.querySelector ('#price');
const inputDiscount=document.querySelector('#discount');
const btn = document.querySelector ('#calcular');
const pResult=document.querySelector('#result');

btn.addEventListener ('click', calcularPrecioConDescuento);

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

}


