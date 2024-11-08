let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartContainer = document.getElementById('cart-count');
    cartContainer.textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
    alert(`${productName} has been added to your cart!`);
}

const buttons = document.querySelectorAll('.btn-add');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.previousElementSibling.previousElementSibling.textContent;
        const productPrice = parseInt(e.target.previousElementSibling.textContent.replace('₹', '').trim());
        addToCart(productName, productPrice);
    });
});

updateCart();
// Initialize cart count from localStorage if available
let cartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;
document.getElementById('cart-count').textContent = cartCount;

// Add to Cart Function
const addToCart = (productName) => {
    cartCount++;
    localStorage.setItem('cartCount', JSON.stringify(cartCount));
    document.getElementById('cart-count').textContent = cartCount;
    alert(`${productName} added to the cart.`);
};

// Add event listeners to product buttons
const addButtons = document.querySelectorAll('.btn-add');
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        addToCart(productName);
    });
});
