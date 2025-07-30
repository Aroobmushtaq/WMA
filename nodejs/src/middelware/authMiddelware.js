const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();
const secretKey = process.env.secret_key;

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  // Extract token part only

    if (!token) {
        return res.status(403).json({ error: "No token provided" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Failed to authenticate token" });
        }
        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    });
}

module.exports = verifyToken;
