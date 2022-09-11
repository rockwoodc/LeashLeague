const { error } = require("console");

// Async Login Form Function
async function loginPage() {
    console.log("Hit Login Page!")
    // email link
    const email = document.getElementById('#email-signup').value.trim();
    // password link
    const password = document.getElementById('#password-signup').value.trim();

    if (email && password) {
        const loginfeedback = await fetch('/api/users/login', {
            method: 'post',
            body: {
                email,
                password
            },
        });

        if (loginfeedback.ok) {
            document.location.replace('/main/')
        } else {
            console.error(error);
        }
    }
}

// Async Register Form Function
async function registerPage() {
    console.log("Hit Register Page!")
    // username link
    const username = document.getElementById('#user-signup').value.trim();
    // email link
    const email = document.getElementById('#email-signup').value.trim();
    // password link
    const password = document.getElementById('#password-signup').value.trim();

    if (email && password) {
        const registerFeedback = await fetch('/api/users/login', {
            method: 'post',
            body: {
                username,
                email,
                password
            },
        });

        if (registerFeedback.ok) {
            document.location.replace('/main/');
        } else {
            console.error(error);
        }
    }
}

// OnClick Button navigates user to login page
document.getElementById('login-form').onclick(loginPage);
// OnClick Button navigates user to register page
document.getElementById('register-form').onclick(registerPage);