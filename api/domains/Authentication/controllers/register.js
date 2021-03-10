const User = require('../../User/models/user');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    try {
        // Create User
        user = await user.save();

        // Create JWT
        const token = jwt.sign({
            userId: user._id
        },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Success
        return res.status(200).json({
            user,
            token
        })
    } catch (error) {
        return res.status(501).json(error);
    }
};