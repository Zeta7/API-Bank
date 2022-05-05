const { App } = require('./App');
const { dataBase } = require('./utils/DataBase');
const { Transfer } = require('./models/TransferModel');
const { User } = require('./models/UserModel');

dataBase
    .authenticate()
    .then(console.log('La base de datos se conecto correctamente'))
    .catch((error) => console.log(error));

dataBase
    .sync()
    .then(console.log('se creo correctamente las tablas'))
    .catch((error) => console.log(error));

const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
    console.log('El servidor inicio correctamente');
});
