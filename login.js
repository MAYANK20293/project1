document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Logged in as: ${email}`);
    // Redirect or save the email as needed
});
