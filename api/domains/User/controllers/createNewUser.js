const User = require('../models/user');

module.exports = async (req, res, next) => {
    let user = new User(req.body)

    try {
        let user = await user.save();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(501).json(error);
    }
};