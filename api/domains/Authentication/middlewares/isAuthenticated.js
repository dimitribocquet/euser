const jwt = require('jsonwebtoken');
const User = require('../../User/models/user');

module.exports = async (req, res, next) => {
    try {
        // Check we have a token
        if (!req.headers.authorization) {
            throw new Error('Token required')
        }

        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;

        // Check if the token is valid
        const user = await User.findById(userId)
        if(!user) {
            throw new Error('Invalid token')
        }

        // Set authenticated user locally
        res.locals.user = user

        next();
    } catch (error) {
        return res.status(401).json({
            error: error.message
        });
    }
};