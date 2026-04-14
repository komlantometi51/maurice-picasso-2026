let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    document.getElementById('cartCount').textContent = cart.length;
    
    const cartItems = document.getElementById('cartItems');
    const cartContent = document.getElementById('cartContent');
    const cartList = document.getElementById('cartList');
    const total = document.getElementById('total');

    if (cart.length === 0) {
        cartItems.style.display = 'block';
        cartContent.style.display = 'none';
    } else {
        cartItems.style.display = 'none';
        cartContent.style.display = 'block';
        
        cartList.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.price.toLocaleString()} FCFA</small>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">❌</button>
            </div>
        `).join('');

        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        total.textContent = totalPrice.toLocaleString();
    }
}


function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert(`✅ ${product.name} ajouté ! (${cart.length} articles)`);
}


function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function clearCart() {
    if (confirm('Vider le panier ?')) {
        cart = [];
        localStorage.removeItem('cart');
        updateCartDisplay();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const productData = JSON.parse(card.dataset.product);
            addToCart(productData);
        });
    });
});
