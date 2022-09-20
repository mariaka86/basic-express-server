'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const app = express();
const PORT = process.env.PORT || 3002;

//Routes
app.get('/', (req, res, next) => {
  res.status(200).send('Welcome!');
});

app.get('/bad', (req, res, next) => {
  next('incorrect route');
});


app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};