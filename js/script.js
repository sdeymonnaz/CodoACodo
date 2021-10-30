
let categoria = document.getElementById('inputCategoria');
let cantidad = document.getElementById('inputCantidad');
let resumen = document.getElementById('cajaTotal');
let precio = 200;


function calcularPrecio() {
    if (categoria.value == 'Estudiante') {
        precio = precio * 0.8;
    }
    else if (categoria.value == 'Trainee') {
        precio = precio * 0.5
    } else{
        precio = precio * 0.15
    }
        resumen.textContent = `Total a Pagar: $${cantidad.value * precio}`;
}







