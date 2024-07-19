function calcularPrecio() {
    const precioBase = 0.135; 
    let descuentoTotal = 0;
    let mensajesDescuento = []; 
    const descuento1 = document.getElementById('descuento1').checked;
    const descuento2 = document.getElementById('descuento2').checked;
    const descuento3 = document.getElementById('descuento3').checked;
    const descuento4 = document.getElementById('descuento4').checked;
    const descuento5 = document.getElementById('descuento5').checked;
    const descuento6 = document.getElementById('descuento6').checked; 
    function mostrarMensajes() {
        const mensajeElement = document.getElementById('mensajeDescuento');
        mensajeElement.innerHTML = mensajesDescuento.join('<br>'); 
        mensajeElement.style.display = 'block';
    }
    function ocultarMensaje() {
        const mensajeElement = document.getElementById('mensajeDescuento');
        mensajeElement.style.display = 'none';
    }
    function agregarMensaje(mensaje) {
        mensajesDescuento.push(mensaje);
        mostrarMensajes();
    }
    if (descuento1) {
        descuentoTotal += 0.10; // 10% de descuento
        agregarMensaje('<li class="list-group-item">10%  De descuento sobre el termino de energia durante 1 año por tener permanencia de 12 meses con endesa');
    }
    if (descuento2) {
        descuentoTotal += 0.03; // 3% de descuento
        agregarMensaje('<li class="list-group-item">3%  De descuento sobre el termino de energia durante 1 año por tener luz y gas en la misma dirección con endesa');
    }
    if (descuento3) {
        descuentoTotal += 0.02; // 2% de descuento
        agregarMensaje('<li class="list-group-item">2%  De descuento sobre el termino de energia durante 1 año por tener facturación electronica con endesa');
    }
    if (descuento4) {
        descuentoTotal += 0.03; // 3% de descuento
        agregarMensaje('<li class="list-group-item">3%  De descuento sobre el termino de energia durante 1 año por tener el servicio de mantenimiento');
    }
    if (descuento5) {
        descuentoTotal += 0.10; // Otro 10% de descuento or nueva contratación de luz
        agregarMensaje('<li class="list-group-item">10%  De descuento sobre el termino de energia durante 1 año valido para nuevas contrataciones de luz');
    }
    if (descuento6) {
        descuentoTotal += 0.10; // 10% de descuento adicional zona catalana
        agregarMensaje('<li class="list-group-item">10%  De descuento sobre el termino de energia durante 1 año por tener luz con endesa en una zona catalana');
        actualizarTitulo(' territorial cataluña');
    } else {
        actualizarTitulo('');
    }
    function actualizarTitulo(sufijo) {
        const tituloElement = document.querySelector('h2');
        tituloElement.textContent = `Endesa libre Verano formidable${sufijo}`;
    }
    document.addEventListener('DOMContentLoaded', function() {
        const imgCheckboxes = document.querySelectorAll('.imagen-container img');
        imgCheckboxes.forEach(img => {
            img.addEventListener('click', function() {
                const checkbox = this.nextElementSibling.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked; 
                calcularPrecio(); 
            });
        });
    });
    const precioFinal = precioBase * (1 - descuentoTotal);
    const resultadoElement = document.getElementById('precioFinal');
    resultadoElement.textContent = precioFinal.toFixed(4); // Mostrar el precio final con 4 decimales
}
