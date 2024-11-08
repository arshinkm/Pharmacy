const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeInElements.forEach(element => {
    observer.observe(element);
});
// Fade-in animation for product cards
const fadeInProducts = () => {
    const productCards = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    productCards.forEach(card => {
        observer.observe(card);
    });
};

document.addEventListener('DOMContentLoaded', fadeInProducts);
