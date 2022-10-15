'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Validator', () => {
  it('sends a 500 if no name is found', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  });

  it('sends 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=something');
    expect(response.status).toEqual(200);
  });

  it('given a name in the query string the output object is correct', async () => {
    const response = await request.get('/person?name=something');
    expect(response.body).toHaveProperty('name');
  });



});
