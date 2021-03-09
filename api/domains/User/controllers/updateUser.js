const User = require('../models/user');

module.exports = async (req, res, next) => {
    const { id } = req.params;

    try {
        let user = await User.findByIdAndUpdate(id, req.body, {
            new: true
        })

        if (!user) {
            return res.status(404).send("No user found")
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(501).json(error);
    }
};