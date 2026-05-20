

document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        initializeLoginForm();
    }

    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        initializeRegisterForm();
    }

    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        initializeContactForm();
    }
});


function initializeLoginForm() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');

    
    emailInput.addEventListener('blur', function() {
        validateLoginEmail();
    });

    emailInput.addEventListener('input', function() {
        clearLoginEmailError();
    });

    
    passwordInput.addEventListener('blur', function() {
        validateLoginPassword();
    });

    passwordInput.addEventListener('input', function() {
        clearLoginPasswordError();
    });

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        
        const emailValid = validateLoginEmail();
        const passwordValid = validateLoginPassword();

        if (emailValid && passwordValid) {
            
            const email = emailInput.value;
            const rememberMe = rememberCheckbox.checked;

            
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }

            
            localStorage.setItem('currentLoggedInUser', email);

            
            showNotification('Login successful! Redirecting...', 'success');

            
            setTimeout(() => {
                
                window.location.href = 'index.html';
            }, 1500);
        } else {
            showNotification('Please fix the errors above', 'error');
        }
    });

    
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberCheckbox.checked = true;
    }
}

function validateLoginEmail() {
    const email = document.getElementById('email').value;
    const errorSpan = document.getElementById('emailError');

    if (!email) {
        errorSpan.textContent = 'Email is required';
        return false;
    }

    if (!validateEmail(email)) {
        errorSpan.textContent = 'Please enter a valid email address';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}

function validateLoginPassword() {
    const password = document.getElementById('password').value;
    const errorSpan = document.getElementById('passwordError');

    if (!password) {
        errorSpan.textContent = 'Password is required';
        return false;
    }

    if (password.length < 6) {
        errorSpan.textContent = 'Password must be at least 6 characters';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}

function clearLoginEmailError() {
    document.getElementById('emailError').textContent = '';
}

function clearLoginPasswordError() {
    document.getElementById('passwordError').textContent = '';
}


function initializeRegisterForm() {
    const form = document.getElementById('registerForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('regEmail');
    const passwordInput = document.getElementById('regPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    
    nameInput.addEventListener('blur', validateRegisterName);
    nameInput.addEventListener('input', () => clearError('nameError'));

    emailInput.addEventListener('blur', validateRegisterEmail);
    emailInput.addEventListener('input', () => clearError('regEmailError'));

    passwordInput.addEventListener('blur', validateRegisterPassword);
    passwordInput.addEventListener('input', () => clearError('regPasswordError'));

    confirmPasswordInput.addEventListener('blur', validateRegisterConfirmPassword);
    confirmPasswordInput.addEventListener('input', () => clearError('confirmPasswordError'));

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameValid = validateRegisterName();
        const emailValid = validateRegisterEmail();
        const passwordValid = validateRegisterPassword();
        const confirmPasswordValid = validateRegisterConfirmPassword();

        if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
            
            const userData = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                registeredDate: new Date().toISOString()
            };

            
            localStorage.setItem('userData_' + emailInput.value, JSON.stringify(userData));

            showNotification('Account created successfully! Redirecting to login...', 'success');

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        } else {
            showNotification('Please fix the errors above', 'error');
        }
    });
}

function validateRegisterName() {
    const name = document.getElementById('name').value.trim();
    const errorSpan = document.getElementById('nameError');

    if (!name) {
        errorSpan.textContent = 'Full name is required';
        return false;
    }

    if (name.length < 3) {
        errorSpan.textContent = 'Name must be at least 3 characters';
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        errorSpan.textContent = 'Name can only contain letters and spaces';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}

function validateRegisterEmail() {
    const email = document.getElementById('regEmail').value;
    const errorSpan = document.getElementById('regEmailError');

    if (!email) {
        errorSpan.textContent = 'Email is required';
        return false;
    }

    if (!validateEmail(email)) {
        errorSpan.textContent = 'Please enter a valid email address';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}

function validateRegisterPassword() {
    const password = document.getElementById('regPassword').value;
    const errorSpan = document.getElementById('regPasswordError');

    if (!password) {
        errorSpan.textContent = 'Password is required';
        return false;
    }

    if (password.length < 8) {
        errorSpan.textContent = 'Password must be at least 8 characters';
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        errorSpan.textContent = 'Password must contain at least one uppercase letter';
        return false;
    }

    if (!/[0-9]/.test(password)) {
        errorSpan.textContent = 'Password must contain at least one number';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}

function validateRegisterConfirmPassword() {
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorSpan = document.getElementById('confirmPasswordError');

    if (!confirmPassword) {
        errorSpan.textContent = 'Please confirm your password';
        return false;
    }

    if (password !== confirmPassword) {
        errorSpan.textContent = 'Passwords do not match';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}


function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('message');

    
    nameInput.addEventListener('blur', validateContactName);
    nameInput.addEventListener('input', () => clearError('contactNameError'));

    emailInput.addEventListener('blur', validateContactEmail);
    emailInput.addEventListener('input', () => clearError('contactEmailError'));

    messageInput.addEventListener('blur', validateContactMessage);
    messageInput.addEventListener('input', () => clearError('messageError'));

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameValid = validateContactName();
        const emailValid = validateContactEmail();
        const messageValid = validateContactMessage();

        if (nameValid && emailValid && messageValid) {
            
            const contactData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value,
                sentDate: new Date().toISOString()
            };

            
            const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            existingMessages.push(contactData);
            localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

            showNotification('Message sent successfully! We will contact you soon.', 'success');
            form.reset();
        } else {
            showNotification('Please fix the errors above', 'error');
        }
    });
}

function validateContactName() {
    const name = document.getElementById('contactName').value.trim();
    const errorSpan = document.getElementById('contactNameError');

    if (!name) {
        errorSpan.textContent = 'Name is required';
        return false;
    }

    if (name.length < 3) {
        errorSpan.textContent = 'Name must be at least 3 characters';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}

function validateContactEmail() {
    const email = document.getElementById('contactEmail').value;
    const errorSpan = document.getElementById('contactEmailError');

    if (!email) {
        errorSpan.textContent = 'Email is required';
        return false;
    }

    if (!validateEmail(email)) {
        errorSpan.textContent = 'Please enter a valid email address';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}

function validateContactMessage() {
    const message = document.getElementById('message').value.trim();
    const errorSpan = document.getElementById('messageError');

    if (!message) {
        errorSpan.textContent = 'Message is required';
        return false;
    }

    if (message.length < 10) {
        errorSpan.textContent = 'Message must be at least 10 characters';
        return false;
    }

    if (message.length > 1000) {
        errorSpan.textContent = 'Message cannot exceed 1000 characters';
        return false;
    }

    errorSpan.textContent = '';
    return true;
}

function clearError(errorId) {
    document.getElementById(errorId).textContent = '';
}