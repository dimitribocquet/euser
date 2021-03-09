const User = require('../models/user');

module.exports = async (req, res, next) => {
    const { id } = req.params;

    try {
        let user = await User.findById(id)

        if (!user) {
            return res.status(404).send("No user found")
        }
        
        return res.status(200).json(user)
    } catch (error) {
        return res.status(404).json({
            id: id,
            message: 'not found',
        })
    }
};