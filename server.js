'use strict';

const app = require('express')();
const authRouter = require('./route/user-auth');
const manageRouter = require('./route/manage-playlist')

app.use('/', authRouter);

app.use('/', manageRouter);

app.listen(8888, () => {
  console.log('Up on 8888');
});
