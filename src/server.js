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
app.get('/person', (req, res, next) => {
  let {personName}=req.query;

  try{
    if(personName){
      res.status(200).send(`The name is ${personName}`);
    }else {
      res.status(200).send(`it is nice to meet them`);
    }
  }catch(err){
    next(err.message);
  }
});



app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};