'use strict';

const serverError = require('../error-handlers/500');

const validator = (req, res, next) => {
  let { name } = req.query;
  try {
    if(name) {
      res.status(200).send({
        name: name,
      });
    } else {
      serverError();
    }
  } catch (error) {
    next(error.message);
  }
};

module.exports = validator;
