var expect = require('chai').expect;

describe('mocha and chai setup', function () {
    it('verifies basic logic', function (done) {
        expect(1+1).to.equal(2);
        done();
    });
});