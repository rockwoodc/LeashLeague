async function loginPage(event) {
    event.preventDefault();
    console.log("Hit Login Page!")
    // email link
    const email = document.querySelector('#email-signin').value.trim();
    // password link
    const password = document.querySelector('#password-signin').value.trim();
    console.log(email, password);

    if (email && password) {
        const loginfeedback = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('LOGIN NEXT STEP')
        if (loginfeedback.ok) {
            document.location.replace('/dashboard/');
        } else {
            console.log('Is not populating dashboard');
        }
    }
}

// Async Register Form Function
async function registerPage(event) {
    event.preventDefault();
    console.log("Hit Register Page!")
    // username link
    const username = document.querySelector('#user-register').value.trim();
    // email link
    const email = document.querySelector('#email-register').value.trim();
    // password link
    const password = document.querySelector('#password-register').value.trim();

    if (username && email && password) {
        const registerFeedback = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-type': 'application/json'}
        });

        if (registerFeedback.ok) {
            document.location.replace('/dashboard/');
        } else {
            console.error(error);
        }
    }
}

// OnClick Button navigates user to login page
document.querySelector('.login-page').addEventListener('submit', loginPage);

// OnClick Button navigates user to register page
document.querySelector('.register-page').addEventListener('submit', registerPage);