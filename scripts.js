function validateLogin(event) {
    event.preventDefault();         // Prevent form submission
    
    const email = document.getElementById('userGmail').value;
    const password = document.getElementById('userPassword').value;
    const errorElement = document.createElement('div');
    errorElement.id = 'error-message';
    
    // Remove any existing error messages
    const existingError = document.getElementById('error-message');
    if (existingError) {
        existingError.remove();
    }

    // Validate email format
    if (!email.endsWith('@anurag.edu.in')) {
        errorElement.textContent = 'Please use your Anurag University email address';
        errorElement.style.color = 'red';
        document.getElementById('loginForm').appendChild(errorElement); // loginform
        return false;
    }

    // Validate password length
    if (password.length < 8) {
        errorElement.textContent = 'Password must be at least 8 characters long';
        errorElement.style.color = 'red';
        document.getElementById('loginForm').appendChild(errorElement);
        return false;
    }

    // If all validations pass
    const username = email.replace('@anurag.edu.in', '');
    window.location.href = `profile.html?user=${username}`;
    return true;
}