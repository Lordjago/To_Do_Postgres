const express = require('express');

const app = express();

app.use(express.json());

const appRoutes = require('./routes/routes');

const authRoutes = require('./routes/auth');

app.use(appRoutes);

app.use(authRoutes);



module.exports = app;


// mongoConnect(()=> {
//     
// });
