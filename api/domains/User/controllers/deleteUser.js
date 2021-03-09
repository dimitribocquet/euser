const User = require('../models/user');

module.exports = async (req, res, next) => {
    const { id } = req.params;

    try {
        let user = await User.findByIdAndRemove(id)

        if (!user) {
            return res.status(404).send("No user found")
        }

        return res.status(200).json({
            message: 'user successfully deleted'
        });
    } catch (error) {
        return res.status(501).json(error);
    }
};