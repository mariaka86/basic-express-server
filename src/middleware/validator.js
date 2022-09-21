'use strict';

const validator = (req,res,next)=>{
  let name = name.now();
  req.name = name;



  next ();
};
module.exports = validator;