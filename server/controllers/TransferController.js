const { Transfer } = require('../models/TransferModel');
const { User } = require('../models/UserModel');

const getAllTransfer = async (request, response) => {
    try {
        const transfer = await Transfer.findAll();
        response.status(200).json({ transfer });
    } catch (error) {
        console.log(error);
    }
};

const createTransfer = async (request, response) => {
    try {
        const { amount, sender, receiver } = request;
        const newTransfer = await Transfer.create({
            amount,
            senderUserId: sender.id,
            receiverUserId: receiver.id,
        });
        response.status(201).json({ newTransfer });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createTransfer, getAllTransfer };
