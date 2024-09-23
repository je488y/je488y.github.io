let cart = [];
let discountRate = 0.10; // 10% discount

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            let itemCard = this.closest('.col-md-4');
            let price = parseInt(itemCard.getAttribute('data-price'));
            let title = itemCard.getAttribute('data-title');
            
            addToCart(title, price);
            showAlert(`${title} añadido al carrito`);
            updateCartSummary();
        });
    });
});

function addToCart(title, price) {
    cart.push({ title, price });
}

function calculateTotal() {
    let total = 0;
    let figureCount = 0;
    cart.forEach(item => {
        figureCount++;
        total += item.price;
        
        // Apply discount for every two figures
        if (figureCount % 2 === 0) {
            total -= item.price * discountRate;
        }
    });
    return total;
}

function updateCartSummary() {
    let cartItems = document.getElementById('cartItems');
    let cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = cart.map(item => `<p>${item.title}: ${item.price} pesos</p>`).join('');
    cartTotal.textContent = `Total: ${calculateTotal()} pesos`;
}

function showAlert(message) {
    document.getElementById('alertText').innerText = message;
    document.getElementById('alertMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('alertMessage').style.display = 'none';
    }, 3000);
}
