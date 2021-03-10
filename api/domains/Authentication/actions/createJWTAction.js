const jwt = require('jsonwebtoken');

module.exports = (user) => {
    return jwt.sign({
        userId: user._id
    },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
}