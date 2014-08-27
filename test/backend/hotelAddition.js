var utils = require('../utils');
var models = require('../../models/');
var mongoose = require('mongoose')
    , config = require('../../config')
    , connectionString = config.get('mongo:url');
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var expect = require('chai').expect;

describe('adds hotels', function () {
    it('creates and finds a hotel', function (done) {
      var Hotel = mongoose.model('Hotel');
      var num_stars = 4;
      Hotel.create({name: "Fullstack", num_stars: num_stars}, function(err, result) {
          Hotel.findOne({name: "Fullstack"}, function(err, hotel) {
              expect(hotel.num_stars).to.equal(num_stars);
              done();
          });
      });
    });
});