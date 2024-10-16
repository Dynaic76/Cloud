const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Store user data in database
    // For demonstration, we will log it to the console
    console.log(`Storing user data: ${name}, ${email}, ${password}`);

    // Send OTP to user
    sendOTP(email, otp);

    res.json({ message: 'OTP sent successfully.' });
});

app.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    // Verify OTP from database
    // For demonstration, we will log it to the console
    console.log(`Verifying OTP for ${email}: ${otp}`);

    if (/* OTP matches */) {
        res.json({ message: 'OTP verified successfully.' });
        // Redirect to home.html
    } else {
        res.json({ message: 'Invalid OTP.' });
        // Redirect to signup or wrong password/username
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

function sendOTP(email, otp) {
    // Configure nodemailer
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false, // or 'STARTTLS'
        auth: {
            user: 'your-email@example.com',
            pass: 'your-password'
        }
    });

    // Define email content
    const mailOptions = {
        from: 'your-email@example.com',
        to: email,
        subject: 'Verify your account',
        text: `Your OTP is: ${otp}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
}
