document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('message').innerText = 'Passwords do not match.';
        return;
    }

    const otp = Math.floor(1000 + Math.random() * 9000);
    // Here you would typically send the email and OTP to your server
    // For demonstration, we will log it to the console
    console.log(`Sending OTP ${otp} to ${email}`);

    // Simulate sending OTP and storing it in the database
    sendOTP(email, otp);
});

function sendOTP(email, otp) {
    // Simulate an API call to send OTP
    setTimeout(() => {
        console.log(`OTP sent to ${email}: ${otp}`);
        alert(`An OTP has been sent to ${email}. Please verify.`);
        // Here you would typically redirect to OTP verification page
    }, 1000);
}
