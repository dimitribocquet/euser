module.exports = (req, res, next) => {
    res.status(200).json({
        data: {
            id: 1,
            name: 'User 1',
        }
    });
};