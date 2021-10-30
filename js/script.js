const precio = 200;

function calcularPrecio() {
    let categoria = document.getElementById('inputCategoria');
    let cantidad = document.getElementById('inputCantidad');
    let resumen = document.getElementById('cajaTotal');

    if (categoria.value == 'Estudiante') {
        precioFinal = precio * 0.2;
    }
    else if (categoria.value == 'Trainee') {
        precioFinal = precio * 0.5
    } else{
        precioFinal = precio * 0.85
    }
        resumen.textContent = `Total a Pagar: $${cantidad.value * precioFinal}`;
}







