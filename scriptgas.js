

//Calcular precios de gas

function calcularPreciogas() {
    let precioBasegas = 0.0949; // Precio base por Kilobaltio en euros para RL 1 y RL 3
    const precioRL2 = 0.089; // Nuevo precio base para RL 2
    let descuentoTotalgas = 0;
    let mensajesDescuentogas = []; // Array para almacenar los mensajes de descuento

    // Obtener los valores de los checkboxes
    const descuentogas1 = document.getElementById('descuentogas1').checked;
    const descuentogas2 = document.getElementById('descuentogas2').checked;
    const descuentogas3 = document.getElementById('descuentogas3').checked;
    const descuentogas4 = document.getElementById('descuentogas4').checked;

    // Función para mostrar los mensajes de descuento
    function mostrarMensajesgas() {
        const mensajeElementgas = document.getElementById('mensajeDescuentogas');
        mensajeElementgas.innerHTML = mensajesDescuentogas.join('<br>'); // Mostrar los mensajes con saltos de línea
        mensajeElementgas.style.display = 'block';
    }

    // Función para ocultar el mensaje de descuento
    function ocultarMensajegas() {
        const mensajeElementgas = document.getElementById('mensajeDescuentogas');
        mensajeElementgas.style.display = 'none';
    }

    // Funciones para añadir y mostrar mensajes de descuento
    function agregarMensajegas(mensaje) {
        mensajesDescuentogas.push(mensaje);
        mostrarMensajesgas();
    }

    // Función para actualizar el precio base dependiendo de la selección
    function actualizarPrecioBaseRL2() {
        const selectTarifaAcceso = document.getElementById('validationCustom04');
        if (selectTarifaAcceso.value === 'RL 2') {
            precioBasegas = precioRL2;
        } else {
            precioBasegas = 0.0949; // Reinicia al precio base para RL 1 y RL 3
        }
    }

    // Aplicar los descuentos si los checkboxes están marcados
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

        // Actualizar el título h2
        actualizarTitulogas(' territorial cataluña');
    } else {
        // Restaurar el título h2 si no está marcado el descuento4
        actualizarTitulogas('');
    }

    // Función para actualizar el título h2
    function actualizarTitulogas(sufijo) {
        const tituloElementgas = document.querySelector('h3');
        tituloElementgas.textContent = `Gas Endesa Verano formidable${sufijo}`;
    }

    // Añadir evento de cambio al selector de tarifa de acceso
    document.addEventListener('DOMContentLoaded', function() {
        const selectTarifaAcceso = document.getElementById('validationCustom04');
        selectTarifaAcceso.addEventListener('change', function() {
            actualizarPrecioBaseRL2(); // Actualizar precio base al cambiar la selección
            calcularPreciogas(); // Recalcular el precio al cambiar la selección
        });

        // Llamar a la función inicialmente para configurar el precio base
        actualizarPrecioBaseRL2();
        calcularPreciogas();
    });

    // Calcular el precio final
    const precioFinalgas = precioBasegas * (1 - descuentoTotalgas);

    // Mostrar el resultado en la página
    const resultadoElementgas = document.getElementById('precioFinalgas');
    resultadoElementgas.textContent = precioFinalgas.toFixed(4); // Mostrar el precio final con 4 decimales
}

