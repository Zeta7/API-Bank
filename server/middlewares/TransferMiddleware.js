const { User } = require('../models/UserModel');

const accountNumberExists = async (request, response, next) => {
    try {
        const { amountBody, senderUser, receiverUser } = request.body;

        const sender = await User.findOne({
            where: { accountNumber: senderUser },
        });
        const receiver = await User.findOne({
            where: { accountNumber: receiverUser },
        });
        if (!sender) {
            return response.status(404).json({
                status: 'error',
                message: 'Sender accountNumber not found given that account.',
            });
        }
        if (!receiver) {
            return response.status(404).json({
                status: 'error',
                message: 'receiver accountNumber not found given that account.',
            });
        } else {
            //============== realiza validacion del monto si es suficiente ======
            if (sender.amount >= amountBody) {
                //============== actuliza los montos de el remitente y del receptor
                await sender.update({ amount: sender.amount - amountBody });
                await receiver.update({ amount: receiver.amount + amountBody });
            } else {
                return response.status(404).json({
                    status: 'error',
                    message: 'insufficient amount',
                });
            }
        }
        request.sender = sender;
        request.receiver = receiver;
        request.amount = amountBody;
        next();
    } catch (error) {
        console.log(error);
    }
};

module.exports = { accountNumberExists };
