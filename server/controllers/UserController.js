const { User } = require('../models/UserModel');

const getAllUsers = async (request, response) => {
    try {
        const users = await User.findAll();
        response.status(200).json({ users });
    } catch (error) {
        console.log(error);
    }
};

const getHistoryUser = async (request, response) => {
    try {
        const { user } = request;
        response.status(200).json({ user });
    } catch (error) {
        console.log(error);
    }
};

const loginUser = async (request, response) => {
    try {
        const { account } = request;
        response.status(200).json(account);
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (request, response) => {
    try {
        const { name, password, amount } = request.body;
        let accountNumber = Math.floor(Math.random() * 999999);
        const newUser = await User.create({
            name,
            accountNumber,
            password,
            amount,
        });
        response.status(201).json({ newUser });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUsers,
    loginUser,
    createUser,
    getHistoryUser,
};
