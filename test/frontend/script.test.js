var expect = chai.expect;

describe('Karma runner setup', function() {
  it('verifies basic logic', function(done) {
    expect(1 + 1).to.equal(2);
    done();
  });
});

describe('Trip Array', function() {
  it('should start as an empty array', function(done) {
    expect(trip).to.eql([]);
    done();
  });
  it('should have a day object after addNewDay', function(done) {
    $ = sinon.stub();
    $.returns(sinon.stub({click: function(){}, append: function(){}}));
    addNewDay();
    expect(trip.length).to.equal(1);
    done();
  });
});