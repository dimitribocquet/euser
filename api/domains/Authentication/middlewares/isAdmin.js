module.exports = (req, res, next) => {
    try {
        const user = res.locals.user

        if (!user) {
            throw new Error('No user found')
        }

        if (user.role !== 'admin') {
            throw new Error('This user is not an admin')
        }

        next();
    } catch (error) {
        return res.status(403).json({
            message: 'Forbidden'
        });
    }
};