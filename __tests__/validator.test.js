
const validator = require('../middleware/validator');

describe('Validator Middleware', () => {

  it('It Works!', async () => {

    // mock all the parameters needed for stamper to work properly
    let req = {};
    let res = {};
    let next = jest.fn();

    // call stamper, and we can confirm functionality
    validator(req, res, next);
    console.log(req.name);
    expect(req.name).toBeTruthy();
    expect(next).toHaveBeenCalled();
  });
});