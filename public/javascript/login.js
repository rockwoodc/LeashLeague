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
        })
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
        const loginfeedback = await fetch('/api/users/login', {
            method: 'post',
            body: {
                username,
                email,
                password
            },
        })
    }
}

document.getElementById('login-form').onclick(loginPage);
document.getElementById('register-form').onclick(registerPage);