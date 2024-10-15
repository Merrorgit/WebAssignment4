document.getElementById('registration-form').onsubmit = function() {
    let password = document.getElementById('password').value; 
    let confirmPassword = document.getElementById('confirm-password').value;

    if (confirmPassword !== password) {
        alert('Passwords are different!');
        return false;
    } else {
        alert('Form successfully sent');
        document.getElementById('registration-form').reset(); 
    }
};
