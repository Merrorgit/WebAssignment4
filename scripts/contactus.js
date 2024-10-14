const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const cards = document.querySelectorAll('.card'); 

themeToggleButton.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    
    const textElements = document.querySelectorAll('.text-light, .text-dark');
    textElements.forEach(element => {
        if (element.classList.contains('text-light')) {
            element.classList.replace('text-light', 'text-dark');
        } else if (element.classList.contains('text-dark')) {
            element.classList.replace('text-dark', 'text-light');
        }
    });

    if (navbar.classList.contains('navbar-dark')) {
        navbar.classList.replace('navbar-dark', 'navbar-light');
        navbar.classList.replace('bg-dark', 'bg-light');
    } else {
        navbar.classList.replace('navbar-light', 'navbar-dark');
        navbar.classList.replace('bg-light', 'bg-dark');
    }
    cards.forEach(card => {
        if (card.classList.contains('bg-dark')) {
            card.classList.replace('bg-dark', 'bg-light');
        } else {
            card.classList.replace('bg-light', 'bg-dark');
        }
    });
});
