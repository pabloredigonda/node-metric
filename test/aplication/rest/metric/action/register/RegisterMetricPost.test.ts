'use stric'

import { Rest } from "../../../../../../application/rest/rest"
const request = require('supertest');

const rest = new Rest(3000);
const app = rest.app;

describe("Register Metric Acceptance Test", () => {

    it('should register a metric', async done => {
        request(app)
            .post('/metric/test')
            .send({"value": 500})
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        
    })
});