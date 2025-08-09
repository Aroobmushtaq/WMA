const Auth = require('../models/authModel');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const { sendWelcomeEmail } = require('../utils/nodemailer');
env.config();
const secretKey = process.env.secret_key;

const registerUser = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;
        const newUser = new Auth({ fullName, email, password, role });
        const token = jwt.sign({ id: newUser._id, role: newUser.role }, secretKey, { expiresIn: '1h' });
        newUser.token = token; 
        await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: newUser, token });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Auth.findOne({ email, password });
        const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // ADDED: Send welcome email after successful login
        const previewUrl = await sendWelcomeEmail(user.email, user.fullName);

        res.status(200).json({ 
            message: "Login successful", 
            user,
            token,
            previewUrl // ADDED: preview link for email
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to login user" });
    }
}

module.exports = { registerUser, loginUser };
