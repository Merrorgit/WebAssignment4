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
const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    if (username === '') {
        document.getElementById('username-error').textContent = 'Username is required.';
        isValid = false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Incorrect email.';
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must not be less than 6 symbols.';
        isValid = false;
    }

    if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'Passwords are different.';
        isValid = false;
    }

    if (isValid) {
        alert('Form succesfully sent');
        form.reset();
    }
});

