var app = require('../../app');
var request = require('supertest')
    , chai = require('chai')
    , expect = chai.expect;

describe("Supertest", function() {
    describe("GET /test_route", function() {
        it("should return 200", function(done) {
            request(app)
                .get('/test_route')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});