const express = require('express');
const {
    userExists,
    accountNumberExists,
} = require('../middlewares/UserMiddlewares');

const {
    getAllUsers,
    createUser,
    loginUser,
    getHistoryUser,
} = require('../controllers/UserController');

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/signup').post(createUser);
router.route('/login').post(accountNumberExists, loginUser);
router.route('/:id/history').get(userExists, getHistoryUser);

module.exports = { usersRoutes: router };
