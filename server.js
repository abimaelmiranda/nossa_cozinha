// require('dotenv').config();

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const flash = require('connect-flash');
// const routes = require('./routes');
// const path = require('path');
// const helmet = require('helmet');
// const csrf = require('csurf');
// const { middlewareGlobal, checkCSRF, csrfMiddleware, notFound } = require('./src/middlewares/middleware');

// //app.use(helmet());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'public')));

// const sessionOptions = session({
//   secret: '!XY$5=d=k{^BwhS#V<@/UKd+?',
//   store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//     httpOnly: true
//   }
// });
// app.use(sessionOptions);
// app.use(flash());

// app.set('views', path.resolve(__dirname, 'src', 'views'));
// app.set('view engine', 'ejs');

// app.use(csrf());

// app.use(middlewareGlobal);
// app.use(checkCSRF);
// app.use(csrfMiddleware);
// app.use(routes);
// app.use(notFound);

// app.on('ready', () => {
//   app.listen(3000, () => {
//     console.log('Acessar http://localhost:3000');
//     console.log('Servidor executando na porta 3000');
//   });
// });

import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('ready');
  })
  .catch(e => console.log(e));

app.on('ready', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});