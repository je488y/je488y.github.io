$(document).ready(function() {
    let cartItems = []; // Array para almacenar los artículos en el carrito

    // Función para añadir artículos al carrito
    window.addToCart = function() {
        const selectedOptions = $('#figureSelect option:selected');
        const quantity = $('#quantityInput').val();
        let total = 0;
        let cartContent = '';

        selectedOptions.each(function() {
            const price = parseInt($(this).val());
            const name = $(this).text();
            const discountedPrice = price * 0.8; // Aplicar 20% de descuento

            // Comprobar si el artículo ya está en el carrito
            const itemIndex = cartItems.findIndex(item => item.name === name);
            if (itemIndex > -1) {
                // Si el artículo ya existe, actualizar su cantidad
                cartItems[itemIndex].quantity += parseInt(quantity);
                cartItems[itemIndex].totalPrice = cartItems[itemIndex].quantity * discountedPrice;
            } else {
                // Si el artículo no existe, añadirlo al carrito
                cartItems.push({
                    name: name,
                    quantity: parseInt(quantity),
                    price: discountedPrice,
                    totalPrice: discountedPrice * quantity
                });
            }
        });

        // Mostrar el contenido del carrito
        cartItems.forEach(item => {
            cartContent += `<p>${item.name} x${item.quantity} - ${item.totalPrice.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}</p>`;
            total += item.totalPrice;
        });

        $('#cart').html(cartContent);
    };

    // Función para generar la factura
    window.generateInvoice = function() {
        let total = 0;
        const cartContent = cartItems.map(item => {
            total += item.totalPrice;
            return `<p>${item.name} x${item.quantity} - ${item.totalPrice.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}</p>`;
        }).join('');

        const invoiceDetails = `<h3>Detalles de la Compra</h3>${cartContent}<h4>Total: ${total.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}</h4>`;
        $('#invoiceDetails').html(invoiceDetails);
        $('#invoiceCard').show();
    };

    // Cambiar el color de los elementos seleccionados a rojo
    $('#figureSelect').on('change', function() {
        $('#figureSelect option').each(function() {
            if ($(this).is(':selected')) {
                $(this).css('color', 'red');
            } else {
                $(this).css('color', 'black');
            }
        });
    });
});
