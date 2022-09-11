// Async Login Form Function
async function loginPage() {
    console.log("Hit Login Page!")
    // email link
    const email = document.getElementById('email-signup').value;
    // password link
    const password = document.getElementById('password-signup').value;
    console.log(email, password);

    if (email && password) {
        const loginfeedback = await fetch('/api/users/login', {
            method: 'POST',
            body: {
                email,
                password
            },
        });
        console.log('LOGIN NEXT STEP')
        if (loginfeedback.ok) {
            document.location.replace('/dashboard')
        } else {
            console.error(error);
        }
    }
}

// Async Register Form Function
async function registerPage() {
    console.log("Hit Register Page!")
    // username link
    const username = document.getElementById('user-register').value.trim();
    // email link
    const email = document.getElementById('email-register').value.trim();
    // password link
    const password = document.getElementById('password-register').value.trim();

    if (email && password) {
        const registerFeedback = await fetch('/api/users/login', {
            method: 'POST',
            body: {
                username,
                email,
                password
            },
        });

        if (registerFeedback.ok) {
            document.location.replace('/main');
        } else {
            console.error(error);
        }
    }
}

// OnClick Button navigates user to login page
document.querySelector('.login-page').onsubmit = loginPage;
// OnClick Button navigates user to register page
// document.querySelector('.register-page').onsubmit = registerPage();