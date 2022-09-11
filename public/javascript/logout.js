const { error } = require("console");

async function logoutPage() {
    console.log("Hit Logout Page!")
    const logoutFeedback = await fetch('/api/users/logout', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (logoutFeedback.ok) {
        document.location.replace('/');
    } else {
        console.error(error);
    }
}

// OnClick Button navigates user back to login page
document.getElementById('logout-form').onclick(logoutPage);