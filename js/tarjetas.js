$(document).ready(function() {
    // Maneja el clic en los botones de añadir al carrito
    $('.add-to-cart').on('click', function(event) {
        event.preventDefault();
        
        let itemCard = $(this).closest('.col-md-4');
        let price = parseInt(itemCard.data('price'));
        let title = itemCard.data('title');
        
        addToCart(title, price);
        showAlert(`${title} añadido al carrito`);
        updateCartSummary();
        
        // Oculta el botón después de añadir al carrito
        $(this).hide();
    });
});

let cart = [];
let discountRate = 0.10; // 10% discount

function addToCart(title, price) {
    cart.push({ title, price });
}

function calculateTotal() {
    let total = 0;
    let figureCount = 0;
    cart.forEach(item => {
        figureCount++;
        total += item.price;
        
        if (figureCount % 2 === 0) {
            total -= item.price * discountRate;
        }
    });
    return total;
}

function updateCartSummary() {
    let cartItems = $('#cartItems');
    let cartTotal = $('#cartTotal');
    cartItems.html(cart.map(item => `<p>${item.title}: ${item.price} pesos</p>`).join(''));
    cartTotal.text(`Total: ${calculateTotal()} pesos`);
}

function showAlert(message) {
    $('#alertText').text(message);
    $('#alertMessage').show();
    setTimeout(() => {
        $('#alertMessage').fadeOut();
    }, 3000);
}
