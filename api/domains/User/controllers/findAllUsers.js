const User = require('../models/user');

module.exports = async (req, res, next) => {
    try {
        let results = await User.find({})
        return res.status(200).json(results)
    } catch (error) {
        return res.status(501).json(error)
    }
};