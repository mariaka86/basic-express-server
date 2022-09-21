'use strict';

const supertest = require('supertest');
const { app } = require('../server');
const request = supertest(app);

describe('API Server', () => {
  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('incorrect route');

  });
  it('handles root path', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Welcome!');

  });
  it('handles \'/person\' route without query param correctly', async () => {
    const response = await request.get('/person');

    expect(response.text).toEqual('It is nice to meet them');
  });

  it('handles \'/person\' route with query param correctly', async () => {
    const response = await request.get('/person').query({personName:'Sweets'});

    expect(response.text).toEqual('The name is Sweets');
  });
});


