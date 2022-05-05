const express = require('express');
const router = express.Router();
const { accountNumberExists } = require('../middlewares/TransferMiddleware');
const {
    createTransfer,
    getAllTransfer,
} = require('../controllers/TransferController');

router.route('/').get(getAllTransfer).post(accountNumberExists, createTransfer);

module.exports = { transferRoute: router };
