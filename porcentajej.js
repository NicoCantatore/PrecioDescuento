// precio original (100% - % a restar) / 100

// 1 parte sin funcion
// const porcentajePrecio = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecio) / 100;

// let precioOriginal = 100;
// let descuento = 15;

//1 funcion resolucion

function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecio = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecio) / 100;
    return precioConDescuento;
}

//2 boton para llamar del html

function botonPrecioDesc() {

    let inputPric = document.getElementById("inputPrice"); // llamo del html el input que pone el usuario
    let valueP = inputPric.value; //  una vez que lo llame lo uso dandole una variable

    let inputDisc = document.getElementById("inputDiscount");
    let valueD = inputDisc.value;

    const precioConDescuento = calcularPrecioConDescuento(valueP, valueD); // llamamos a la funcion calcular

    const resultadoP = document.getElementById("resultP"); //llamo id con la funcion  y la nueva funcion la uso para escribir
    resultadoP.innerHTML = "precio con descuento $" + precioConDescuento; // inner escribimos html desde js
}