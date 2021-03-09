module.exports = (req, res, next) => {
    res.status(200).json({
        data: [
            {
                id: 1,
                name: 'User 1',
            },
            {
                id: 2,
                name: 'User 2',
            },
            {
                id: 3,
                name: 'User 3',
            },
            {
                id: 4,
                name: 'User 4',
            }
        ]
    });
};