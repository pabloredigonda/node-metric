'use stric'

import { Rest } from "../../../../../../application/rest/rest"
const request = require('supertest');

const rest = new Rest(3000);
const app = rest.app;

describe("Sum Metric Acceptance Test", () => {

    it('should get the sum of a metric', async done => {
        request(app)
            .post('/metric/test')
            .send({"value": 500})
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

        request(app)
            .post('/metric/test')
            .send({"value": 400})
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

        request(app)
            .get('/metric/test/sum')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response: any) => {
                expect(response.body.value).toBe(900)
                done();
            })
            .catch((err: any) => done(err));
        
    })
});