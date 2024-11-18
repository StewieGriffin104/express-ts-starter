import request from 'supertest';
import { app, server } from '../';

describe('GET /', () => {
  afterAll(() => {
    server.close();
  });

  it('should return Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
