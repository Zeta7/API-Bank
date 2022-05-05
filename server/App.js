const express = require('express');
const { usersRoutes } = require('./routers/UsersRouter');
const { transferRoute } = require('./routers/TransfersRouter');

const App = express();

App.use(express.json());

App.use('/api/v1/users', usersRoutes);
App.use('/api/v1/transfers', transferRoute);

module.exports = { App };
