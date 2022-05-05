const { User } = require('../models/UserModel');

const userExists = async (request, response, next) => {
    try {
        const { id } = request.params;

        const user = await User.findOne({ where: { id } });
        if (!user) {
            return response.status(404).json({
                status: 'error',
                message: 'User not found given that id.',
            });
        }
        request.user = user;
        next();
    } catch (error) {
        console.log(error);
    }
};

const accountNumberExists = async (request, response, next) => {
    try {
        const { accountNumber, password } = request.body;

        const account = await User.findOne({
            where: { accountNumber, password },
        });
        if (!account) {
            return response.status(404).json({
                status: 'error',
                message: 'accountNumber not found given that account.',
            });
        }
        request.account = account;
        next();
    } catch (error) {
        console.log(error);
    }
};

module.exports = { userExists, accountNumberExists };
