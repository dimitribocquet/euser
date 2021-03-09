const User = require('../../User/models/user');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Get the user
        let user = await User.findOne({
            email: email
        })
        if (!user) {
            return invalidCredentialsResponse(res)
        }

        // Check password
        const valid = bcrypt.compareSync(password, user.password)
        if (!valid) {
            return invalidCredentialsResponse(res)
        }

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
        console.log(error);
        return res.status(501).json(error)
    }
};

function invalidCredentialsResponse(res) {
    return res.status(401).json({
        message: 'Invalid credentials.'
    })
}