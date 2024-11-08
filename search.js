function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('search-bar').addEventListener('input', searchProducts);
// Search functionality
const searchInput = document.getElementById('search-bar');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
