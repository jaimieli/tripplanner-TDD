var app = require('../../app');
var request = require('supertest')
    , chai = require('chai')
    , expect = chai.expect;

describe("GET /", function() {
    it("should return JSON with hotels, restaurants and TTD", function(done) {
        request(app)
            .get('/data')
            .expect('Content-Type', /json/)
            .expect(function(res) {
              console.log(res.body);
              var data = res.body;
              if(data.hotels && data.restaurants && data.thingtodos) {
                return;
              } else {
                return "Didn't get all the data properly.";
              }
            })
            .expect(200, done);
    });
});