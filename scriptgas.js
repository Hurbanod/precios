//Calcular precios de gas
function calcularPreciogas() {
    let precioBasegas = 0.0949;
    const precioRL2 = 0.089; 
    let descuentoTotalgas = 0;
    let mensajesDescuentogas = []; 
    
    const descuentogas1 = document.getElementById('descuentogas1').checked;
    const descuentogas2 = document.getElementById('descuentogas2').checked;
    const descuentogas3 = document.getElementById('descuentogas3').checked;
    const descuentogas4 = document.getElementById('descuentogas4').checked;

    function mostrarMensajesgas() {
        const mensajeElementgas = document.getElementById('mensajeDescuentogas');
        mensajeElementgas.innerHTML = mensajesDescuentogas.join('<br>'); 
        mensajeElementgas.style.display = 'block';
    }
    function ocultarMensajegas() {
        const mensajeElementgas = document.getElementById('mensajeDescuentogas');
        mensajeElementgas.style.display = 'none';
    }
    function agregarMensajegas(mensaje) {
        mensajesDescuentogas.push(mensaje);
        mostrarMensajesgas();
    }
    function actualizarPrecioBaseRL2() {
        const selectTarifaAcceso = document.getElementById('validationCustom04');
        if (selectTarifaAcceso.value === 'RL 2') {
            precioBasegas = precioRL2;
        } else {
            precioBasegas = 0.0949; 
        }
    }

    if (descuentogas1) {
        descuentoTotalgas += 0.03; // 10% de descuento
        agregarMensajegas('<li class="list-group-item">3%  De descuento sobre el termino variable durante 1 año por tener luz y gas con endesa en la misma direccion');
    }
    if (descuentogas2) {
        descuentoTotalgas += 0.10; // 3% de descuento
        agregarMensajegas('<li class="list-group-item">10%  De descuento sobre el termino variable durante 1 año valido para nuevas contrataciones de gas');
    }
    if (descuentogas3) {
        descuentoTotalgas += 0.02; // 2% de descuento
        agregarMensajegas('<li class="list-group-item">2%  De descuento sobre el termino variable durante 1 año por tener facturación electronica con endesa');
    }
    if (descuentogas4) {
        descuentoTotalgas += 0.20; // 20% de descuento adicional
        agregarMensajegas('<li class="list-group-item">20%  De descuento sobre el termino variable durante 1 año por tener gas con endesa en cataluña');

        actualizarTitulogas(' territorial cataluña');
    } else {
       
        actualizarTitulogas('');
    }
    function actualizarTitulogas(sufijo) {
        const tituloElementgas = document.querySelector('h3');
        tituloElementgas.textContent = `Gas Endesa Verano formidable${sufijo}`;
    }
    document.addEventListener('DOMContentLoaded', function() {
        const selectTarifaAcceso = document.getElementById('validationCustom04');
        selectTarifaAcceso.addEventListener('change', function() {
            actualizarPrecioBaseRL2(); 
            calcularPreciogas(); 
        });
        actualizarPrecioBaseRL2();
        calcularPreciogas();
    });
    const precioFinalgas = precioBasegas * (1 - descuentoTotalgas);
    const resultadoElementgas = document.getElementById('precioFinalgas');
    resultadoElementgas.textContent = precioFinalgas.toFixed(4); // Mostrar el precio final con 4 decimales
}

