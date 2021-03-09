module.exports = (req, res, next) => {
    res.status(200).json({
        data: {
            id: 4,
            name: 'User updated 4',
        }
    });
};