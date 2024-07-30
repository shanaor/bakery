// script.js

function updateCart() {
    try {
        // Retrieve cart items from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let tableBody = document.getElementById('cart-items');
        let total = 0;

        // Clear previous table content
        if (tableBody) {
            tableBody.innerHTML = '';

            // Iterate through each item in cartItems and update the table
            cartItems.forEach(item => {
                let row = `
                    <tr>
                        <td>${item.name}</td>
                        <td>$${item.price.toFixed(2)}</td>
                        <td>${item.quantity}</td>
                        <td>$${(item.price * item.quantity).toFixed(2)}</td>
                        <td><button class="button remove-button" onclick="removeFromCart('${item.name}')">Remove</button></td>
                    </tr>`;
                tableBody.innerHTML += row;
                total += item.price * item.quantity;
            });

            // Update total cost
            let totalElement = document.getElementById('total-price');
            if (totalElement) {
                totalElement.innerText = `$${total.toFixed(2)}`;
            }
        } else {
            console.error('Element with id "cart-items" not found.');
        }
    } catch (error) {
        console.error('Error updating cart:', error);
    }
}

function removeFromCart(name) {
    try {
        // Retrieve cart items from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Filter out the item to be removed by name
        cartItems = cartItems.filter(item => item.name !== name);

        // Update localStorage with the modified cartItems
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update the displayed cart
        updateCart();
    } catch (error) {
        console.error('Error removing item from cart:', error);
    }
}

function checkout() {
    try {
        // Remove cartItems from localStorage upon checkout
        localStorage.removeItem('cartItems');

        // Update the displayed cart (to clear it)
        updateCart();

        // Alert and redirect
        alert('Thank you for your purchase!');
        window.location.href = 'index.html'; // Redirect to homepage or success page
    } catch (error) {
        console.error('Error checking out:', error);
    }
}

// Update cart when the page loads
window.onload = updateCart;
