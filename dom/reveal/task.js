window.addEventListener('scroll', function() {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect();
        if (elementPosition.top < window.innerHeight && elementPosition.bottom > 0) {
            element.classList.add('reveal_active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect();
        
        if (elementPosition.top < window.innerHeight && elementPosition.bottom > 0) {
            element.classList.add('reveal_active');
        }
    });
});